from flask.ext.security import UserMixin
from flask.ext.security.datastore import UserDatastore
from pymongo import MongoClient

from backend.utils import hash_password


class User(UserMixin):
    """Class for users."""

    def __init__(self, username=None, email=None, hashed_password=None,
                 password_salt=None, active=False, first_name=None, roles=None):
        self.username = username
        self.id = self.username
        self.email = email
        self.hashed_password = hashed_password
        self.password_salt = password_salt
        self.active = active
        self.first_name = first_name
        self.roles = roles

    def has_role(self, role):
        """Returns True is a User has a specific role."""
        pass

    def is_active(self):
        """Returns True if the user is active."""


class UserDB(UserDatastore):
    """Provides controls for User Database."""

    mongo = MongoClient()
    db = mongo["users"]

    def activate_user(self, user):
        """Enables a user account.

        :param User user: A User object representing the user to activate.

        :returns: True is the user account is activated.
        :rtype: bool
        """
        result = self.db.update_one({"username": user.username},
                                    {"active": True})
        if result != 1:
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
        existing_users = self.db.find({"username": username})
        if existing_users:
            raise Exception("Username '{}' is already taken.".format(username))

        # Check for users with this email
        existing_users = self.db.find({"email": email})
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

        self.db.insert(new_user)
        user = User(**new_user)
        self.activate_user(user)
        return user

    def deactivate_user(self, user):
        """Disables the user account."""
        pass

    def get_user(self, username=None, email=None):
        """Returns a user object for a matching user."""
        pass

    def delete_user(self, user):
        """Deletes the specified user."""
        pass

    def change_password(self, new_password):
        """Changes the password to the new password."""
        pass

    def authenticate_user(self, username, password):
        """Returns True if the username and password combo is correct."""
        pass