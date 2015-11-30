from datetime import timedelta
from flask import make_response, request, current_app
from functools import update_wrapper


def json_error(msg, **data):
    import json
    response = {"error": msg}
    response.update(data)
    return json.dumps(response)


def json_success(msg, **data):
    import json
    response = {"success": msg}
    response.update(data)
    return json.dumps(response)


def hash_password(passwd, salt=None):
    """Creates a hash from a password using a salt and 100 rounds of SHA512."""
    import hashlib
    import os
    salt = salt or os.urandom(512)
    hashed = passwd + salt
    for i in range(100): hashed = hashlib.sha512(hashed)
    return hashed, salt


def crossdomain(origin=None, methods=None, headers=None,
                max_age=21600, attach_to_all=True,
                automatic_options=True):
    if methods is not None:
        methods = ', '.join(sorted(x.upper() for x in methods))
    if headers is not None and not isinstance(headers, (str, bytes)):
        headers = ', '.join(x.upper() for x in headers)
    if not isinstance(origin, (str, bytes)):
        origin = ', '.join(origin)
    if isinstance(max_age, timedelta):
        max_age = max_age.total_seconds()

    def get_methods():
        if methods is not None:
            return methods

        options_resp = current_app.make_default_options_response()
        return options_resp.headers['allow']

    def decorator(f):
        def wrapped_function(*args, **kwargs):
            if automatic_options and request.method == 'OPTIONS':
                resp = current_app.make_default_options_response()
            else:
                resp = make_response(f(*args, **kwargs))
            if not attach_to_all and request.method != 'OPTIONS':
                return resp

            h = resp.headers

            h['Access-Control-Allow-Origin'] = origin
            h['Access-Control-Allow-Methods'] = get_methods()
            h['Access-Control-Max-Age'] = str(max_age)
            if headers is not None:
                h['Access-Control-Allow-Headers'] = headers
            return resp

        f.provide_automatic_options = False
        return update_wrapper(wrapped_function, f)
    return decorator