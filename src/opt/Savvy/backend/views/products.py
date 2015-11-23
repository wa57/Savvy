import json

from flask import Blueprint
from flask import request

from backend.models.products import ProductDB
from backend.utils import json_error

product_blueprint = Blueprint("products", __name__, url_prefix="/api/v1/products")


@product_blueprint.route("/", methods=["GET"])
def api_products():
    """Returns details about products.

    Input Parameters:
        query       (string): The query to search for.

    Returns:
        A JSON array of dictionaries containing details for products matching the query.

        Example:
            [
                {
                    product_id: 1235,
                    description: "Large Coffee",
                    tags: ["coffee", "drinks", "caffeine"]
                },
                {
                    ...
                }
            ]
    """
    query = request.args.get("query", None)
    if not query:
        return json_error("Query can not be empty")
    product_db = ProductDB()
    results = product_db.search(query)
    return json.dumps(results)
