import logging
from functools import wraps

from werkzeug.local import LocalProxy

from backend.utils import json_error


logger = logging.getLogger("backend.auth")


current_user = LocalProxy(lambda: _get_user())


def _get_user():
    from flask import request
    from backend.models.users import AnonymousUser
    return getattr(request, "current_user", None) or AnonymousUser()


def login_required(view):
    @wraps(view)
    def wrapper(*args, **kwargs):
        if current_user.is_authenticated:
            return view(*args, **kwargs)
        else:
            return json_error("Unauthorized", status_code=403)
    return wrapper


def user_is_authenticated(user_id, allow_admin=True):
    if allow_admin and current_user.is_admin:
        return True
    if current_user.is_authenticated and current_user.user_id == user_id:
        return True
    return False
