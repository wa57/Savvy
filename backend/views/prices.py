import json

from flask import Blueprint
from flask import request

from backend.models.prices import PriceDB
from backend.utils import json_error, json_success, crossdomain

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
    results = product_db.get_submissions(product, business)
    return json.dumps(results)


@price_blueprint.route("/add", methods=["POST", "OPTIONS"])
@crossdomain(origin="*", headers=["accept", "content-type"])
def api_add_price():
    """Adds a price to the database.

    POST http://besavvy.xyz/api/v1/prices/add

    Input Parameters:
        product     (string)    : The product description.
        business    (string)    : The business name.
        user        (string)    : The username of the price submitter.
        price       (integer)   : The price in USD cents.

    Returns HTTP 200:
        {
            success: "Price added successfully.",
            id: "abcdefghijklmnopqrstuv0123456789"
        }
        OR
        {
            error: "Unable to add price."
        }
        OR
        {
            error: "Missing s required field."
        }
    """
    data = request.get_json()
    product = data.get("product", None)
    business = data.get("business", None)
    user = data.get("user", None)
    price = data.get("price", None)
    image = data.get("image", None)
    if not product or not business or not user or price is None:
        return json_error("Missing a required field.")
    price_db = PriceDB()
    result = price_db.add_price(product=product, business=business, user=user, price=price, image=image)
    if not result:
        return json_error("Unable to add price.")
    return json_success("Price added successfully.", id=str(result))
