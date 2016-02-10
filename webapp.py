import logging
import traceback
from logging.handlers import RotatingFileHandler

from flask import Flask
from flask import request
from flask import Response
from flask.ext.login import LoginManager

from backend.views.users import user_blueprint
from backend.views.products import product_blueprint
from backend.views.prices import price_blueprint
from backend.views.businesses import business_blueprint


app = Flask(__name__, static_folder="frontend")
app.config["PROPAGATE_EXCEPTIONS"] = False
app.config["SECRET_KEY"] = '\x85\xe7\x98?L\xfaKa2\xbdQ\xef\xa5&\x03\x17\x9bj\x17 \xbc\xc8j\xbb'


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


# Configure authentication handler
login_manager = LoginManager()
login_manager.init_app(app)


@login_manager.user_loader
def load_user(user_id):
    from backend.models.users import UserDB
    db = UserDB()
    user = db.get_user(user_id=user_id)
    return user


@app.errorhandler(500)
def json_error(msg, **data):
    import json
    import pprint
    logger.debug(pprint.pformat(vars(request)))
    if isinstance(msg, Exception):
        msg = str(msg)
    response = {"error": msg}
    response.update(data)
    return Response(json.dumps(response), mimetype="application/json"), 500


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
