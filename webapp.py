import logging
from logging.handlers import RotatingFileHandler

from flask import Flask
from flask import request
from flask import Response, session


from backend.views.users import user_blueprint
from backend.views.products import product_blueprint
from backend.views.prices import price_blueprint
from backend.views.businesses import business_blueprint
from backend.utils import json_error


app = Flask(__name__, static_folder="frontend")
app.config["PROPAGATE_EXCEPTIONS"] = False
app.config["SECRET_KEY"] = '\x85\xe7\x98?L\xfaKa2\xbdQ\xef\xa5&\x03\x17\x9bj\x17 \xbc\xc8j\xbb'
app.register_error_handler(500, json_error)


# Configure logging
log_format = logging.Formatter("%(asctime)s [%(name)s.%(funcName)s():%(lineno)d]\n\t%(levelname)8s: %(message)s\n")

logger = logging.getLogger()

stderr_handler = logging.StreamHandler()
stderr_handler.setLevel(logging.DEBUG)
stderr_handler.setFormatter(log_format)
logger.addHandler(stderr_handler)

file_handler = RotatingFileHandler("web.log", maxBytes=50000, backupCount=2)
file_handler.setLevel(logging.DEBUG)
file_handler.setFormatter(log_format)
logger.addHandler(file_handler)

logger.setLevel(logging.DEBUG)
app.logger.setLevel(logging.DEBUG)

logger.info("Logging Configured at Level {}".format(logger.getEffectiveLevel()))


# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app


@app.before_request
def load_user_from_request():
    from datetime import datetime
    from backend.models.users import UserDB, AnonymousUser

    logger.debug("Attempting to authenticate client.")

    session["current_user"] = None

    client_token = request.cookies.get("user_token", None)
    username = request.cookies.get("username", None)
    if not client_token or not username:
        logger.debug("No cookies found.")
        return None
    logger.debug("Got client token: {}/{}".format(client_token, username))

    user_db = UserDB()
    user = user_db.get_user(username=username)

    if user.auth_token:
        token, expires = user.auth_token
        if client_token == token and expires > datetime.utcnow():
            logger.debug("Accepted user token: {}/{}".format(client_token, username))
            session["current_user"] = user.user_id
            return None

    logger.debug("Failed token: {}/{}".format(client_token, username))
    return None


@app.route("/")
def root():
    """Serve the frontend."""
    return app.send_static_file("index.html")


@app.route("/api/v1")
def api_docs():
    """Root of the API provides documentation."""
    logger.info("Loading API docs.")
    return 'This is where API documentation should be.'


# Register all of the blueprints
app.register_blueprint(user_blueprint)
app.register_blueprint(product_blueprint)
app.register_blueprint(price_blueprint)
app.register_blueprint(business_blueprint)


if __name__ == '__main__':
    app.run()
