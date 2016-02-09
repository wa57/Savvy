import logging

from flask.ext.login import UserMixin, current_user

from backend.database import DB
from backend.utils import hash_password


logger = logging.getLogger("savvy.models.users")


class User(UserMixin):
    """Class for users."""

    def __init__(self, username=None, email=None, hashed_password=None,
                 password_salt=None, active=False, first_name=None, roles=None, user_id=None):
        self.username = username
        self.id = self.user_id = user_id
        self.email = email
        self.hashed_password = hashed_password
        self.password_salt = password_salt
        self.active = active
        self.first_name = first_name
        self.roles = roles or []

    def has_role(self, role_name):
        """Returns True is a User has a specific role."""
        for role in self.roles:
            if role_name == role.name:
                return True

    def get_id(self):
        return self.user_id

    @property
    def is_active(self):
        """Returns True if the user is active."""
        return self.active

    @property
    def is_authenticated(self):
        if current_user and current_user.user_id == self.user_id:
            return True
        return False

    @property
    def is_anonymous(self):
        return False


class UserDB(DB):
    """Provides controls for User Database."""

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
            "roles": ["user"]
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

    def get_user(self, username=None, email=None, user_id=None):
        """Returns a user object for a matching user."""
        if user_id:
            result = self.db.users.find_one({"_id": user_id})
        elif username:
            result = self.db.users.find_one({"username": username})
        elif username:
            result = self.db.users.find_one({"email": email})
        else:
            raise Exception("Missing username, email, or user_id.")
        if not result:
            return None
        result["user_id"] = str(result.pop("_id"))
        return User(**result)

    def delete_user(self, user):
        """Deletes the specified user."""
        pass

    def change_password(self, new_password):
        """Changes the password to the new password."""
        pass

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
        logger.debug(hashed_password)
        logger.debug(user.hashed_password)
        return False
