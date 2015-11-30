__author__ = 'Ryan'


class Business(object):
    """Class for businesses."""

    def __init__(self, business_id=None, name=None, street_address=None, city=None, state=None, open_time=None, close_time=None, phone_number=None, description=None):
        self.business_id = business_id
        self.name = name
        self.street_address = street_address
        self.city = city
        self.state = state
        self.open_time = open_time
        self.close_time = close_time
        self.phone_number = phone_number
        self.description = description

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
            "business_id": business_object.business_id,
            "name": business_object.name,
            "street_address": business_object.street_address,
            "city": business_object.city,
            "state": business_object.state,
            "open_time": business_object.open_time,
            "close_time": business_object.close_time,
            "phone_number": business_object.phone_number,
            "description": business_object.description
            }
        result = db.businesses.insert_one(new_business)
        return result.inserted_id or None
        
            
            
