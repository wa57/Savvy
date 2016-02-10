import json

from flask import Blueprint
from flask import request
from flask import Response

from backend.models.businesses import BusinessDB
from backend.utils import json_error, crossdomain

business_blueprint = Blueprint("businesses", __name__, url_prefix="/api/v1/businesses")


@business_blueprint.route("/<business_id>", methods=["GET"])
@crossdomain(origin="*")
def api_get_product(business_id):
    """Returns details about a single product.

    Input Parameters:
        business_id       (string): The business ID to get.

    Returns:
        A JSON object of dictionaries containing details for the business matching the ID.

        Example:
            {
                business_id: 1235,
            }
    """
    business_db = BusinessDB()
    result = business_db.get_business(business_id)
    return Response(json.dumps(result), mimetype="application/json")


@business_blueprint.route("/search", methods=["GET"])
@crossdomain(origin="*")
def api_search():
    """Returns details about businesses.

    Input Parameters:
        query       (string): The query to search for.

    Returns:
        A JSON array of dictionaries containing details for businesses matching the query.

        Example:
            [
                {
                    "name": "Store"
                    "google_places": {}
                },
                {
                    ...
                }
            ]
    """
    query = request.args.get("query", None)
    if not query:
        return json_error("Query can not be empty")
    business_db = BusinessDB()
    results = business_db.search(query)
    return json.dumps(results)
