def json_error(msg):
    import json
    return json.dumps({"error": msg})


def json_success(msg):
    import json
    return json.dumps({"success": msg})


def hash_password(passwd, salt=None):
    """Creates a hash from a password using a salt and 100 rounds of SHA512."""
    import hashlib
    import os
    salt = salt or os.urandom(512)
    hashed = passwd + salt
    for i in range(100): hashed = hashlib.sha512(hashed)
    return hashed, salt