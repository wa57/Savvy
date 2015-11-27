__author__ = 'Colin'


class Product(object):
    """Class for products."""

    def __init__(self, product_id=None, description=None, tags=None, price_reliability=None):
        self.product_id = product_id
        self.description = description
        self.tags = tags
        self.price_reliability = price_reliability


class ProductDB(object):
    """Class to connect to the Products Datastore."""

    _products = []

    def search(self, query):
        """Returns a list of matching products."""
        from backend.database import db
        results = db.products.find_many({"description": {"$regex": ".*{}.*".format(query)}})
        return results

    def add_price(self):
        """Adds a price record to the database."""
        pass
