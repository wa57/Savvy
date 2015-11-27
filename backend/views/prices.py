import json

from flask import Blueprint
from flask import request

from backend.models.prices import PriceDB
from backend.utils import json_error, crossdomain

price_blueprint = Blueprint("prices", __name__, url_prefix="/api/v1/prices")


@price_blueprint.route("/get", methods=["GET"])
@crossdomain(origin="*")
def api_get_prices():
    """Returns details about products.

    Input Parameters:
        product       (string): The query to search for.
        business

    Returns:
        A JSON array of dictionaries containing details for prices matching the query.
    """
    product = request.args.get("product", None)
    business = request.args.get("business", None)

    if not product and not business:
        return json_error("Query can not be empty")
    product_db = PriceDB()
    results = product_db.search(product, business)
    return json.dumps(results)
