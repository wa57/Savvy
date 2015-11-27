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
        import re
        from backend.database import db
        results = db.products.find({"description": re.compile(".*{}.*".format(query), re.IGNORECASE)}, {"_id": 0})
        return [dict(result) for result in results]
