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
    """Logs off the currently logged in user.

    Example Request:
        HTTP GET /api/v1/users/logout
        HTTP POST /api/v1/users/logout

    Example Response:
        200 OK
    """
    from backend.models.users import UserDB
    UserDB().clear_auth_token(user=current_user)
    session["current_user"] = None
    response = json_success("Logout successful.")
    return response


@user_blueprint.route("/current", methods=["GET"])
@login_required
def api_current_user():
    """Gets the user details for the currently logged in user.

    Example Request:
        HTTP GET /api/v1/users/current

    Example Response:
        {
          "success": "Authenticated.",
          "user": {
            "email": "john.doe@example.com",
            "user_id": "56cd1187d6545b2144f4ae25",
            "first_name": "John",
            "user_token_expires": "2016-04-19T17:22:15",
            "roles": [
              "user"
            ],
            "voting_history": [],
            "username": "johndoe",
            "user_token": "6be12e73fb356595665c4afcc0bfaee5"
          }
        }
    """
    user_data = current_user.sanatized_dict()
    response = json_success("Authenticated.", user=user_data)
    return response


@user_blueprint.route("/<user_id>/submissions", methods=["GET"])
def api_user_submissions(user_id):
    """Gets the price submissions for a user matching the user_id.

    Example Request:
        HTTP GET /api/v1/users/56cf848722e7c01d0466e533/submissions

    Example Response:
        {
          "success": "OK",
          "user_submissions": [
            {
              "submitted_timestamp": "2016-02-25 22:52:32+00:00",
              "image": null,
              "business_details": {
                "google_places": {
                  ... truncated for ease of reading ...
                },
                "open_time": null,
                "business_id": "56cf859195bfb3ccb12582e5",
                "address": "6200 N Broad St, Philadelphia, PA 19141, United States",
                "phone_number": "(215) 549-5089",
                "name": "Shell",
                "close_time": null
              },
              "product_id": "56bbda2dd8d9a114db76ca5c",
              "price": 153,
              "user_id": "56cf848722e7c01d040ae533",
              "price_id": "56cf85b022e7c0197cf2a02b"
            },
            ...
          ]
        }
    """
    from backend.models.prices import PriceDB
    if not user_is_authenticated(user_id=user_id):
        return json_error("Unauthorized", status_code=403)
    price_db = PriceDB()
    submissions = price_db.get_submissions(user_id=user_id)
    return json_success("OK", user_submissions=submissions)


@user_blueprint.route("/<user_id>/voting-history", methods=["GET"])
def api_user_voting_history(user_id):
    """Gets the product voting history for a user matching the user_id.

    Example Request:
        HTTP GET /api/v1/users/56cf848722e7c01d0466e533/voting-history

    Example Response:
        {
          "success": "OK",
          "voting_history": []
        }
    """
    from backend.models.voting import VotingDB
    if not user_is_authenticated(user_id=user_id):
        return json_error("Unauthorized", status_code=403)
    history = VotingDB().get_user_history(user_id=current_user.user_id)
    return json_success("OK", voting_history=history)


@user_blueprint.route("/<user_id>/delete", methods=["POST"])
def api_delete_user(user_id):
    """Deletes the user matching the user_id.

    Example Request:
        HTTP POST /api/v1/users/56cf848722e7c01d0466e533/delete

    Example Response:
        {
          "success": "User 'johndoe' deleted."
        }
    """
    from backend.models.users import UserDB
    if not user_is_authenticated(user_id=user_id):
        return json_error("Unauthorized", status_code=403)
    user_db = UserDB()
    user = user_db.get_user(user_id=user_id)
    user_db.delete_user(user)
    return json_success("User '{}' deleted.".format(user.username))


@user_blueprint.route("/<email_address>/send-reset-code", methods=["POST"])
def api_send_reset_code(email_address):
    """Sends an email to the user matching the email_address with a password reset code.

    Example Request:
        HTTP POST /api/v1/users/johndoe@example.com/send-reset-code

    Example Response:
        {
          "success": "Password reset email sent."
        }
    """
    from backend.contact import send_password_reset_code
    user_db = UserDB()
    user = user_db.get_user(email=email_address)
    if user:
        logger.debug("Sending password reset token for user '{}'.".format(user.username))
        token, expires = user_db.create_password_reset_token(user)
        send_password_reset_code(email_address=user.email, first_name=user.first_name, reset_code=token)
    else:
        logger.warning("No user matched email '{}'.".format(email_address))
    return json_success("Password reset email sent.")


@user_blueprint.route("/reset-password", methods=["POST"])
def api_reset_password():
    """Resets a password using a password reset code.

    Example Request:
        HTTP POST /api/v1/users/reset-password
        {
            "reset_code": "3CECBF10",
            "new_password": "abc123"
        }

    Example Response:
        {
          "success": "Password reset successfully!."
        }
    """
    data = request.get_json()

    reset_code = data.get("reset_code", None)
    if reset_code is None:
        return json_error("reset_code is required.")

    new_password = data.get("new_password", None)
    if new_password is None:
        return json_error("new_password is required.")

    UserDB().reset_password(reset_code=reset_code, new_password=new_password)
    return json_success("Password reset successfully!.")


@user_blueprint.route("/<user_id>/change-password", methods=["POST"])
def api_change_password(user_id):
    """Allows a logged in user to change their password.

    Example Request:
        HTTP POST /api/v1/users/56cf848722e7c01d0466e533/change-password
        {
            "new_password": "abc123"
        }

    Example Response:
        {
          "success": "Password changed for user 'johndoe'."
        }
    """
    if not user_is_authenticated(user_id=user_id):
        return json_error("Unauthorized", status_code=403)

    data = request.get_json()

    new_password = data.get("new_password", None)
    if new_password is None:
        return json_error("A new password is required.")

    user_db = UserDB()
    user = user_db.get_user(user_id=user_id)
    user_db.change_password(user, new_password=new_password)
    return json_success("Password changed for user '{}'.".format(user.username))



