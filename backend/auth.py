import logging
from functools import wraps

from werkzeug.local import LocalProxy

from backend.utils import json_error


logger = logging.getLogger("backend.auth")


current_user = LocalProxy(lambda: _get_user())


def _get_user():
    from flask import session
    from backend.models.users import UserDB, AnonymousUser
    user_id = session.get("current_user", None)
    if not user_id:
        logger.debug("No user_id in session.")
        return AnonymousUser()
    user = UserDB().get_user(user_id=user_id)
    if not user:
        logger.debug("No user matching ID '{}'.".format(user_id))
        return AnonymousUser()
    logger.debug("Matched user '{}'".format(user.username))
    return user


def login_required(view):
    @wraps(view)
    def wrapper(*args, **kwargs):
        if current_user.is_authenticated:
            return view(*args, **kwargs)
        else:
            return json_error("Unauthorized", status_code=403)
    return wrapper
