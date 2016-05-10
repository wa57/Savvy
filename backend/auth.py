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
