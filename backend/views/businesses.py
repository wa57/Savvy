import json

from flask import Blueprint
from flask import request

from backend.models.businesses import BusinessDB
from backend.utils import json_error, crossdomain

business_blueprint = Blueprint("businesses", __name__, url_prefix="/api/v1/businesses")


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
