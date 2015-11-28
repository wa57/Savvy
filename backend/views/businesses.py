import json

from flask import Blueprint
from flask import request

from backend.models.businesses import BusinessDB
from backend.utils import json_error, crossdomain

product_blueprint = Blueprint("businesses", __name__, url_prefix="/api/v1/businesses")


@product_blueprint.route("/search", methods=["GET"])
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
                    "business_id": 90,
                    "name": "The Store Store",
                    "street": "111 Holly Drive",
                    "city": "Nowhereville",
                    "state": "FL",
                    "open_time": 9,
                    "close_time": 21,
                    "phone": "9999999999",
                    "description": "A store which sells store keeping products."
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
