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
        new_price = {"product": product,
                     "business": business,
                     "price": int(price),
                     "user": user,
                     "submitted_timestamp": Timestamp(datetime.now(), 1)}
        #result = self.db.prices.insert_one(new_price)
        result = self.db.products.insert_one({"description": product})
        return result.inserted_id or None


def test():
    price_db = PriceDB()
    price_db.add_price(product="PTest", business="Target", user="user1", price=201)


if __name__ == "__main__":
    test()

