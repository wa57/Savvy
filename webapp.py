import logging
from logging.handlers import RotatingFileHandler

from flask import Flask

from backend.views.users import user_blueprint
from backend.views.products import product_blueprint
from backend.views.prices import price_blueprint


app = Flask(__name__)
file_handler = RotatingFileHandler("web.log", maxBytes=25, backupCount=2)
file_handler.setLevel(logging.INFO)
app.logger.addHandler(file_handler)


# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app


@app.route("/api/v1")
def api_docs():
    """Root of the API provides documentation."""
    return 'This is where API documentation should be.'


# Register all of the blueprints
app.register_blueprint(user_blueprint)
app.register_blueprint(product_blueprint)
app.register_blueprint(price_blueprint)


if __name__ == '__main__':
    app.run()
