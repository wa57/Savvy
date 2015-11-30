__author__ = 'Ryan'


class Business(object):
    """Class for businesses."""

    def __init__(self, name=None, google_places=None):
        self.name = name
        self.google_places = google_places

class BusinessDB(object):
    """Class to connect to the Businesses Datastore."""

    def search(self, query):
        """Returns a list of matching businesses."""
        import re
        from backend.database import db
        results = db.businesses.find({"name": re.compile(".*{}.*".format(query), re.IGNORECASE)}, {"_id": 0})
        return [dict(result) for result in results]

    def add_business(self, business_object):
        """Adds a business to the database."""
        from backend.database import db
        new_business = {
            "name": business_object.name,
            "google_places": business_object.google_places
            }
        result = db.businesses.insert_one(new_business)
        return result.inserted_id or None
        
            
            
