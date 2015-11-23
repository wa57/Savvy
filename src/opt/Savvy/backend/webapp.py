from flask import Flask

from backend.views.users import user_blueprint
from backend.views.products import product_blueprint


app = Flask(__name__)

# Make the WSGI interface available at the top level so wfastcgi can get it.
wsgi_app = app.wsgi_app


@app.route("/api/v1")
def api_docs():
    """Root of the API provides documentation."""
    return 'This is where API documentation should be.'


# Register all of the blueprints
app.register_blueprint(user_blueprint)
app.register_blueprint(product_blueprint)


if __name__ == '__main__':
    app.run()
