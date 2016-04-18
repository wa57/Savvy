import logging

from flask import Blueprint
from flask import request, session

from backend.auth import current_user, login_required, user_is_authenticated
from backend.models.users import UserDB
from backend.utils import json_success, json_error


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

    request.current_user = user

    user_data = current_user.sanatized_dict()

    response = json_success("Login successful.", user=user_data)
    response.set_cookie("user_token", token, expires=expires)
    response.set_cookie("username", user.username, expires=expires)
    return response


@user_blueprint.route("/logout", methods=["GET", "POST"])
@login_required
def api_logout():
    from backend.models.users import UserDB
    UserDB().clear_auth_token(user=current_user)
    session["current_user"] = None
    response = json_success("Logout successful.")
    return response


@user_blueprint.route("/current", methods=["GET"])
@login_required
def api_current_user():
    user_data = current_user.sanatized_dict()
    response = json_success("Authenticated.", user=user_data)
    return response


@user_blueprint.route("/<user_id>/change_password", methods=["POST"])
def api_change_password(user_id):
    if not user_is_authenticated(user_id=user_id):
        return json_error("Unauthorized", status_code=403)
    pass


@user_blueprint.route("/<user_id>/submissions", methods=["GET"])
def api_user_submissions(user_id):
    from backend.models.prices import PriceDB
    if not user_is_authenticated(user_id=user_id):
        return json_error("Unauthorized", status_code=403)
    price_db = PriceDB()
    submissions = price_db.get_submissions(user_id=user_id)
    return json_success("OK", user_submissions=submissions)


@user_blueprint.route("/<user_id>/voting-history", methods=["GET"])
def api_user_voting_history(user_id):
    from backend.models.voting import VotingDB
    if not user_is_authenticated(user_id=user_id):
        return json_error("Unauthorized", status_code=403)
    history = VotingDB().get_user_history(user_id=current_user.user_id)
    return json_success("OK", voting_history=history)


@user_blueprint.route("/<user_id>/delete", methods=["POST"])
def api_delete_user(user_id):
    if not user_is_authenticated(user_id=user_id):
        return json_error("Unauthorized", status_code=403)
    pass


@user_blueprint.route("/<user_id>/reset_password", methods=["POST"])
def api_reset_password(user_id):
    if not user_is_authenticated(user_id=user_id):
        return json_error("Unauthorized", status_code=403)
    pass



