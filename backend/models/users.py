import logging

from bson.objectid import ObjectId

from backend.database import DB
from backend.utils import hash_password


logger = logging.getLogger("savvy.models.users")


class User(object):
    """Class for users."""

    def __init__(self, username=None, email=None, hashed_password=None,
                 password_salt=None, active=False, first_name=None, roles=None, user_id=None, created_timestamp=None,
                 auth_token=None, voting_history=None, **kwargs):
        self.username = username
        self.id = self.user_id = user_id
        self.email = email
        self.hashed_password = hashed_password
        self.password_salt = password_salt
        self.active = active
        self.first_name = first_name
        self.roles = roles or []
        self.created_timestamp = created_timestamp
        self.auth_token = auth_token
        self.voting_history = voting_history or []

    def has_role(self, role_name):
        """Returns True is a User has a specific role."""
        for role in self.roles:
            if role_name == role:
                return True

    def get_id(self):
        return self.user_id

    @property
    def is_admin(self):
        return self.has_role("admin")

    @property
    def is_active(self):
        """Returns True if the user is active."""
        return self.active

    @property
    def is_authenticated(self):
        from backend.auth import current_user
        if current_user and current_user.user_id == self.user_id:
            return True
        return False

    @property
    def is_anonymous(self):
        return False

    def get_auth_token(self):
        return user_db.get_auth_token(self)

    def clear_auth_token(self):
        return user_db.clear_auth_token(self)

    def create_auth_token(self):
        return user_db.create_auth_token(self)

    def sanatized_dict(self):
        if self.auth_token:
            token, expires = self.auth_token
            expires = expires.isoformat()
        else:
            token, expires = None, None
        user_data = {
            "user_id": self.user_id,
            "username": self.username,
            "email": self.email,
            "first_name": self.first_name,
            "user_token": token,
            "user_token_expires": expires,
            "roles": self.roles,
            "voting_history": self.voting_history
        }
        return user_data


class AnonymousUser(object):

    def has_role(self):
        return False

    @property
    def is_active(self):
        return False

    @property
    def is_admin(self):
        return False

    @property
    def is_authenticated(self):
        return False

    @property
    def is_anonymous(self):
        return True


class UserDB(DB):
    """Provides controls for User Database."""

    AVAILABLE_ROLES = ["user", "admin"]

    def activate_user(self, user):
        """Enables a user account.

        :param User user: A User object representing the user to activate.

        :returns: True is the user account is activated.
        :rtype: bool
        """
        result = self.db.users.update_one(
            {"username": user.username},
            {
                "$set": {"active": True}
            }
        )
        if result.modified_count != 1:
            raise Exception("Unable to activate user.")
        return True

    def create_user(self, username, email, password, first_name):
        """Creates a new user account and activates it.

        :param str username: A new username.
        :param str email: Email sddress of the new user.
        :param str password: The plain-text password for the new user.
        :param str first_name: The first name of the new user.

        :returns: User object representing the new user.
        :rtype: User
        """
        from datetime import datetime
        from bson.timestamp import Timestamp
        hashed_password, salt = hash_password(password)

        # Check for users with this username
        existing_users = self.db.users.find_one({"username": username})
        if existing_users:
            raise Exception("Username '{}' is already taken.".format(username))

        # Check for users with this email
        existing_users = self.db.users.find_one({"email": email})
        if existing_users:
            raise Exception("The email address '{}' already has an account.".format(email))

        new_user = {
            "username": username,
            "email": email,
            "hashed_password": hashed_password,
            "password_salt": salt,
            "first_name": first_name,
            "active": False,
            "roles": ["user"],
            "created_timestamp": Timestamp(datetime.now(), 1)
        }
        logger.info("Creating new user '{}'.".format(username))
        logger.debug("Details for user '{}': {}".format(username, new_user))

        result = self.db.users.insert_one(new_user)
        if not result.inserted_id:
            raise Exception("Unable to insert user '{}'.".format(username))
        new_user.pop("_id", None)   # Remove _id from the dict because insert_one() mutates it.
        new_user["user_id"] = str(result.inserted_id)
        user = User(**new_user)
        self.activate_user(user)
        return user

    def deactivate_user(self, user):
        """Disables the user account."""
        pass

    def get_user(self, username=None, email=None, user_id=None, password_reset_token=None):
        """Returns a user object for a matching user."""
        from backend.models.voting import VotingDB
        if user_id:
            result = self.db.users.find_one({"_id": ObjectId(user_id)})
        elif username:
            result = self.db.users.find_one({"username": username})
        elif email:
            result = self.db.users.find_one({"email": email})
        elif password_reset_token:
            result = self.db.users.find_one({"password_reset_token.0": password_reset_token})
        else:
            raise Exception("Missing username, email, or user_id.")
        if not result:
            return None
        result["user_id"] = str(result.pop("_id"))
        if result.get("auth_token", None):
            token, expires = result["auth_token"]
            if token and expires:
                result["auth_token"] = (token, expires.as_datetime().replace(tzinfo=None))
        voting_history = VotingDB().get_user_history(user_id=result["user_id"])
        return User(voting_history=voting_history, **result)

    def get_all_users(self):
        """Returns a user object for a matching user."""
        from backend.models.voting import VotingDB
        users = []
        results = self.db.users.find({})
        for result in results:
            result["user_id"] = str(result.pop("_id"))
            if result.get("auth_token", None):
                token, expires = result["auth_token"]
                if token and expires:
                    result["auth_token"] = (token, expires.as_datetime().replace(tzinfo=None))
            voting_history = VotingDB().get_user_history(user_id=result["user_id"])
            users.append(User(voting_history=voting_history, **result))
        return users

    def get_auth_token(self, user):
        from datetime import datetime
        result = self.db.users.find_one({"username": user.username})
        token, expires = result.get("auth_token", (None, None))
        if not token or not (expires and expires > datetime.now()):
            token, expires = self.create_auth_token(user)
        else:
            expires.as_datetime()
        return token, expires

    def create_auth_token(self, user):
        import os
        from bson.timestamp import Timestamp
        from datetime import datetime
        from hashlib import md5
        from backend.config import SAVVY_LOGIN_EXPIRATION
        expires = Timestamp(datetime.now() + SAVVY_LOGIN_EXPIRATION, 1)
        token = md5(os.urandom(512)).hexdigest()
        self.db.users.update_one({"username": user.username},
                                 {
                                     "$set": {
                                         "auth_token": (token, expires)
                                     }
                                 })
        return token, expires.as_datetime()

    def create_password_reset_token(self, user):
        import os
        from bson.timestamp import Timestamp
        from datetime import datetime
        from hashlib import md5
        from backend.config import SAVVY_LOGIN_EXPIRATION
        expires = Timestamp(datetime.now() + SAVVY_LOGIN_EXPIRATION, 1)
        token = md5(os.urandom(512)).hexdigest()[-8:].upper()
        self.db.users.update_one({"username": user.username},
                                 {
                                     "$set": {
                                         "password_reset_token": (token, expires)
                                     }
                                 })
        return token, expires.as_datetime()

    def clear_auth_token(self, user):
        self.db.users.update_one({"username": user.username},
                                 {
                                     "$set": {
                                         "auth_token": None
                                     }
                                 })
        return None

    def delete_user(self, user):
        """Deletes the specified user."""
        logger.debug("Deleting user '{}'.".format(user.username))
        result = self.db.users.delete_one({"_id": ObjectId(user.id)})
        if result.deleted_count != 1:
            logger.error("Unable to delete user '{}' with user_id '{}'.".format(user.username, user.id))
            raise Exception("Unable to delete user '{}'.".format(user.username))
        logger.info("Deleted user '{}'.".format(user.username))

    def change_password(self, user, new_password):
        """Changes the password to the new password."""
        logger.debug("Changing password for user '{}'.".format(user.username))
        hashed_new_password, salt = hash_password(new_password)
        result = self.db.users.update_one(
            {"username": user.username},
            {
                "$set": {
                    "hashed_password": hashed_new_password,
                    "password_salt": salt
                }
            }
        )
        if result.modified_count != 1:
            msg = "Unable to change password for user '{}'.".format(user.username)
            logger.error(msg)
            raise Exception(msg)
        logger.info("Changed password for user '{}'.".format(user.username))

    def reset_password(self, reset_code, new_password):
        """Changes the password for a user with the reset_code to the new password."""
        from datetime import datetime
        logger.debug("Changing password for reset code '{}'.".format(reset_code))
        hashed_new_password, salt = hash_password(new_password)

        result = self.db.users.find_one({"password_reset_token.0": reset_code})
        if not result:
            raise Exception("No user with matching password reset token.")

        token, expires = result["password_reset_token"]
        if expires.as_datetime().replace(tzinfo=None) <= datetime.now():
            raise Exception("Password reset token has expired.")

        username = result["username"]

        result = self.db.users.update_one(
            {"username": username},
            {
                "$set": {
                    "hashed_password": hashed_new_password,
                    "password_salt": salt
                },
                "$unset": {"password_reset_token": ""}
            }
        )
        if result.modified_count != 1:
            msg = "Unable to change password for user '{}'.".format(username)
            logger.error(msg)
            raise Exception(msg)
        logger.info("Changed password for user '{}' with reset_code.".format(username))

    def authenticate_user(self, username, password):
        """Returns True if the username and password combo is correct."""
        logger.debug("Authenticating user '{}'.".format(username))
        user = self.get_user(username=username)
        if not user:
            logger.debug("User '{}' does not exist.".format(username))
            return False
        hashed_password, salt = hash_password(password, user.password_salt)
        if hashed_password == user.hashed_password:
            return user
        logger.debug("Passwords do not match for user '{}'.".format(username))
        return False

    def alter_user(self, user_id, changes):
        """Returns True if the username and password combo is correct."""
        logger.debug("Altering user '{}'.".format(user_id))
        update_result = self.db.users.update_one(
            {"_id": ObjectId(user_id)},
            {
                "$set": changes
            }
        )
        if update_result.modified_count != 1:
            msg = "Unable to alter user '{}'.".format(user_id)
            logger.error(msg)
            raise Exception(msg)

user_db = UserDB()