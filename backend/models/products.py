__author__ = 'Colin'


from backend.database import DB


class Product(object):
    """Class for products."""

    def __init__(self, product_id=None, description=None, tags=None, price_reliability=None):
        self.product_id = product_id
        self.description = description
        self.tags = tags
        self.price_reliability = price_reliability


class ProductDB(DB):
    """Class to connect to the Products Datastore."""

    def get(self, id):
        from bson.objectid import ObjectId
        try:
            product = dict(self.db.products.find({"_id": ObjectId(id)}).next())
        except StopIteration:
            raise Exception("Product with ID '{}' not found.".format(id))
        product["product_id"] = str(product.pop("_id"))
        return product

    def search(self, query):
        """Returns a list of matching products."""
        import re
        results = []
        for result in self.db.products.find({"$or": [{"description": re.compile(".*{}.*".format(query), re.IGNORECASE)}, {"tags": re.compile(".*{}.*".format(query), re.IGNORECASE)}]}):
            result = dict(result)
            result["product_id"] = str(result.pop("_id"))
            results.append(result)
        return results

    def add_product(self, description, tags=None):
        """Adds a product to the database."""
        tags = tags or []
        result = self.db.products.update_one({"description": description},
                                             {"$addToSet": {"tags": {"$each": tags}}},
                                             upsert=True)
        return result.upserted_id or None
