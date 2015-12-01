__author__ = 'Colin'

from backend.database import DB


class PriceDB(DB):
    """Class to connect to the Prices Datastore."""

    def average_price(self, product):
        """Returns the average price of a product."""
        result = self.db.prices.aggregate([
            {"$match":
                {
                    "product": product
                }
            },
            {"$group":
                {
                    "_id": "$product",
                    "average": {"$avg": "$price"}
                }
            }
        ])
        return int(next(result)["average"])

    def search(self, product=None, business=None):
        """Returns a list of matching prices."""
        import re
        query = {}
        if product:
            query["product"] = re.compile(".*{}.*".format(product), re.IGNORECASE)
        if business:
            query["business"] = re.compile(".*{}.*".format(business), re.IGNORECASE)
        results = self.db.prices.find(query, {"_id": 0})
        return [dict(result) for result in results]

    def add_price(self, product, business, price, user):
        """Adds a price record to the database."""
        from bson.timestamp import Timestamp
        from datetime import datetime
        from backend.models.businesses import BusinessDB
        from backend.models.products import ProductDB
        new_price = {"product": product["description"],
                     "business": business["name"],
                     "price": int(price),
                     "user": user,
                     "submitted_timestamp": Timestamp(datetime.now(), 1)}
        result = self.db.prices.insert_one(new_price)
        product_db = ProductDB()
        product_db.add_product(description=product["description"],
                               tags=product["tags"])
        business_db = BusinessDB()
        business_db.add_business(name=business["name"],
                                 address=business["formatted_address"],
                                 phone_number=business["formatted_phone_number"],
                                 google_places=business)
        return result.inserted_id or None

