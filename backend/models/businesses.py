__author__ = 'Ryan'


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
        for result in self.db.businesses.find({"name": re.compile(".*{}.*".format(query), re.IGNORECASE)}):
            result = dict(result)
            result["business_id"] = str(result.pop("_id"))
            results.append(result)
        return results

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
                                               new_business,
                                               upsert=True)
        return result.inserted_id or None
