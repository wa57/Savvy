import json

from flask import Blueprint
from flask import request

from backend.models.products import ProductDB
from backend.models.prices import PriceDB
from backend.utils import json_error, crossdomain

product_blueprint = Blueprint("products", __name__, url_prefix="/api/v1/products")


@product_blueprint.route("/search", methods=["GET"])
@crossdomain(origin="*")
def api_search():
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
    price_db = PriceDB()
    results = []
    for result in product_db.search(query):
        result["average_price"] = price_db.average_price(result["description"])
        result["lowest_price"] = price_db.lowest_price(result["description"])
        results.append(result)
    return json.dumps(results)
