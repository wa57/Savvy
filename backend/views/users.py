from flask import Blueprint
from flask import request
from flask.ext.login import login_user, current_user

from backend.models.users import UserDB
from backend.utils import json_error, json_success

user_blueprint = Blueprint("users", __name__, url_prefix="/api/v1/users")


@user_blueprint.route("/", methods=["GET"])
def api_users():
    """Returns details about users.

    Input Parameters:
        username    (string): The username of a user to query.
        email       (string): The email address of a user to query.

    Returns:
        A JSON array of dictionaries containing details for users matching the query.

        Example:
            [
                {
                    username: "johndoe1",
                    email: "john.doe@example.com",
                    first_name: "John",
                    active: True,
                    roles: ["user"]
                },
                {
                    ...
                }
            ]
    """
    username = request.args.get("username", None)
    email = request.args.get("email", None)
    if username is None and email is None:
        return json_error("Invalid username.")
    user_db = UserDB()
    user = user_db.get_user(username)
    return


@user_blueprint.route("/create", methods=["POST"])
def api_create_user():
    data = request.get_json()

    username = data.get("username", None)
    if username is None:
        return json_error("username is required.")

    password = data.get("password", None)
    if password is None:
        return json_error("password is required.")

    email = data.get("email", None)
    if email is None:
        return json_error("email is required.")

    first_name = data.get("first_name", None)
    if first_name is None:
        return json_error("first_name is required.")

    user_db = UserDB()
    user = user_db.create_user(username=username,
                               password=password,
                               email=email,
                               first_name=first_name)

    return json_success("User '{}' created successfully.".format(user.username))


@user_blueprint.route("/login", methods=["POST"])
def api_login():
    data = request.get_json()

    username = data.get("username", None)
    if username is None:
        return json_error("username is required.")

    password = data.get("password", None)
    if password is None:
        return json_error("password is required.")

    user_db = UserDB()

    user = user_db.authenticate_user(username, password)
    if not user:
        return json_error("Invalid username or password.")

    login_user(user)

    return json_success("Login successful {}".format(current_user),
                        {"token": get})


@user_blueprint.route("/change_password", methods=["POST"])
def api_change_password():
    pass


@user_blueprint.route("/delete", methods=["POST"])
def api_delete_user():
    pass


@user_blueprint.route("/reset_password", methods=["POST"])
def api_reset_password():
    pass
