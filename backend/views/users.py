import logging

from flask import Blueprint
from flask import request, session

from backend.auth import current_user, login_required
from backend.models.users import UserDB
from backend.utils import json_error, json_success


logger = logging.getLogger("savvy.views.users")


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

    logger.debug("Authenticated User: {}".format(user))

    token, expires = user.create_auth_token()

    session["current_user"] = user.user_id

    user_data = current_user.sanatized_dict()

    response = json_success("Login successful.", user=user_data)
    response.set_cookie("user_token", token, expires=expires)
    response.set_cookie("username", user.username, expires=expires)
    return response


@user_blueprint.route("/change_password", methods=["POST"])
def api_change_password():
    pass


@user_blueprint.route("/delete", methods=["POST"])
def api_delete_user():
    pass


@user_blueprint.route("/reset_password", methods=["POST"])
def api_reset_password():
    pass


@user_blueprint.route("/current", methods=["POST"])
@login_required
def api_current_user():
    user_data = current_user.sanatized_dict()
    response = json_success("Authenticated.", user=user_data)
    return response
