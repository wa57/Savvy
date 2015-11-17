from flask import Flask

from backend.src.opt.Savvy import user_blueprint


app = Flask(__name__)


@app.route("/api/v1")
def api_docs():
    """Root of the API provides documentation."""
    return 'This is where API documentation should be.'


# Register all of the blueprints
app.register_blueprint(user_blueprint)


if __name__ == '__main__':
    app.run()
