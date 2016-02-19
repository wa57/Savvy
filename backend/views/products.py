import json
import logging

from flask import Blueprint
from flask import request
from flask import Response

from backend.auth import login_required
from backend.models.products import ProductDB
from backend.models.prices import PriceDB
from backend.models.businesses import BusinessDB
from backend.utils import json_success, json_error, crossdomain


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
    limit = int(request.args.get("price_limit", 15))
    result = product_db.get(product_id)
    # Get prices
    stats = price_db.price_stats(product_id)
    result.update(stats)
    result["average_price_per_day"] = price_db.average_price_per_day(product_id)
    result["price_submissions"] = price_db.get_sanitized_submissions(product_id=product_id, limit=limit, most_recent=True)
    return Response(json.dumps(result), mimetype="application/json")


@product_blueprint.route("/<product_id>/thumbs-up", methods=["POST", "PUT"])
@crossdomain(origin="*")
@login_required
def api_product_thumbs_up(product_id):
    """Returns details about a single product.

    Input Parameters:
        product_id       (string): The product ID to get.
    """
    product_db = ProductDB()
    product_db.thumbs_up(product_id)
    return json_success("Thumbed it up.")


@product_blueprint.route("/<product_id>/thumbs-down", methods=["POST", "PUT"])
@crossdomain(origin="*")
@login_required
def api_product_thumbs_down(product_id):
    """Returns details about a single product.

    Input Parameters:
        product_id       (string): The product ID to get.
    """
    product_db = ProductDB()
    product_db.thumbs_down(product_id)
    return json_success("Thumbed it down.")


@product_blueprint.route("/<product_id>/tag", methods=["POST", "PUT"])
@crossdomain(origin="*")
@login_required
def api_product_tag(product_id):
    """Returns details about a single product.

    Input Parameters:
        product_id       (string): The product ID to get.
    """
    product_db = ProductDB()
    data = request.get_json()
    tag = data.get("tag", None)
    result = product_db.add_tag(product_id, tag)
    if not result:
        return json_error("Unable to add tag.")
    return json_success("Tag added successfully.")


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
    logger.debug("Searching for products. Query = '{}'".format(query))
    if not query:
        return json_error("Query can not be empty")
    product_db = ProductDB()
    price_db = PriceDB()
    results = []
    for result in product_db.search(query):
        product_id = result["product_id"]
        stats = price_db.price_stats(product_id)
        result.update(stats)
        result["average_price_per_day"] = price_db.average_price_per_day(product_id)
        results.append(result)
    logger.debug("Product search result. Query = '{}'. Result = '{}'".format(query, results))
    return Response(json.dumps(results), mimetype="application/json")
