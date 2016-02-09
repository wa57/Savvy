import json
import logging

from flask import Blueprint
from flask import request
from flask.ext.login import login_required

from backend.models.products import ProductDB
from backend.models.prices import PriceDB
from backend.models.businesses import BusinessDB
from backend.utils import json_error, crossdomain


logger = logging.getLogger("savvy.views.products")


product_blueprint = Blueprint("products", __name__, url_prefix="/api/v1/products")


@product_blueprint.route("/<product_id>", methods=["GET"])
@crossdomain(origin="*")
def api_get_product(product_id):
    """Returns details about a single product.

    Input Parameters:
        product_id       (string): The product ID to get.

    Returns:
        A JSON object of dictionaries containing details for the product matching the ID.

        Example:
            {
                product_id: 1235,
                description: "Large Coffee",
                tags: ["coffee", "drinks", "caffeine"]
            }
    """
    product_db = ProductDB()
    price_db = PriceDB()
    business_db = BusinessDB()
    result = product_db.get(product_id)
    result["average_price"] = price_db.average_price(result["description"])
    result["lowest_price"] = price_db.lowest_price(result["description"])
    result["highest_price"] = price_db.highest_price(result["description"])
    result["average_price_per_day"] = price_db.average_price_per_day(result["description"])
    result["businesses"] = [business_db.get_business(price["business"]) for price in price_db.search(product=result["description"])]
    return json.dumps(result)


@product_blueprint.route("/search", methods=["GET"])
@crossdomain(origin="*")
#@login_required
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
    logger.debug("Searching for products. Query = '{}'".format(query))
    if not query:
        return json_error("Query can not be empty")
    product_db = ProductDB()
    price_db = PriceDB()
    results = []
    for result in product_db.search(query):
        result["average_price"] = price_db.average_price(result["description"])
        result["lowest_price"] = price_db.lowest_price(result["description"])
        result["highest_price"] = price_db.highest_price(result["description"])
        result["average_price_per_day"] = price_db.average_price_per_day(result["description"])
        results.append(result)
    logger.debug("Product search result. Query = '{}'. Result = '{}'".format(query, results))
    return json.dumps(results)
