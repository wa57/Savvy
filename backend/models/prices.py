__author__ = 'Colin'


class PriceDB(object):
    """Class to connect to the Prices Datastore."""

    def search(self, product=None, business=None):
        """Returns a list of matching prices."""
        import re
        from backend.database import db
        query = {}
        if product:
            query["product"] = re.compile(".*{}.*".format(product), re.IGNORECASE)
        if business:
            query["business"] = re.compile(".*{}.*".format(business), re.IGNORECASE)
        results = db.prices.find(query, {"_id": 0})
        return [dict(result) for result in results]

    def add_price(self, product, business, price, user):
        """Adds a price record to the database."""
        from backend.database import db
        new_price = {"product": product,
                     "business": business,
                     "price": int(price),
                     "user": user}
        result = db.prices.insert_one(new_price)
        return result.inserted_id or None

