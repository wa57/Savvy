__author__ = 'Ryan'


from backend.database import DB


class Business(object):
    """Class for businesses."""

    def __init__(self, name=None, google_places=None):
        self.name = name
        self.google_places = google_places


class BusinessDB(DB):
    """Class to connect to the Businesses Datastore."""

    def search(self, query):
        """Returns a list of matching businesses."""
        import re
        results = []
        for result in self.db.businesses.find({"name": re.compile(".*{}.*".format(query), re.IGNORECASE)}):
            result = dict(result)
            result["business_id"] = str(result.pop("_id"))
            results.append(result)
        return results

    def get_business(self, business_id):
        from bson.objectid import ObjectId
        try:
            business = dict(self.db.businesses.find({"_id": ObjectId(business_id)}).next())
        except StopIteration:
            raise Exception("Product with ID '{}' not found.".format(business_id))
        business["business_id"] = str(business.pop("_id"))
        return business

    def add_business(self, name, address=None, phone_number=None, open_time=None, close_time=None,
                     google_places=None):
        """Adds a business to the database."""
        new_business = {
            "name": name,
            "address": address,
            "open_time": open_time,
            "close_time": close_time,
            "phone_number": phone_number,
            "google_places": google_places
            }
        result = self.db.businesses.update_one({"google_places.place_id": google_places["place_id"]},
                                               {"$set": new_business},
                                               upsert=True)
        if result.upserted_id:
            business_id = str(result.upserted_id)
        else:
            result = self.db.businesses.find_one({"google_places.place_id": google_places["place_id"]})
            business_id = str(result["_id"])
        return business_id
