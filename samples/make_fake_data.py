import json
import random
from faker import Factory


fake = Factory.create('en_US')


def create_users():
    """Creates some fake user data."""

    users = []

    for user_id in range(0, 100):

        name = fake.first_name()
        username = name + str(random.randint(123, 5634))
        email = fake.free_email()
        plaintext_password = fake.password(length=10, special_chars=True, digits=True, upper_case=True, lower_case=True)

        new_user = {"user_id": user_id,
                    "username": username,
                    "first_name": name,
                    "email": email,
                    "plaintext_password": plaintext_password}

        users.append(new_user)

    with open("users.json", "w") as f:
        f.write(json.dumps(users))
    return users


def create_products():
    """Creates some fake product data."""

    products = []

    _sample1 = ["", "Large", "Small", "Medium", "Decaf", "Oversized", "Business", "Personal", "Ready-To-Use"]
    _sample2 = ["Coffee", "Printer Paper", "Miller-Lite", "Doll House", "Dog Collar", "Oil Change", "Meat Thermometer"]

    for product_id in range(0, 100):

        name = random.choice(_sample1) + random.choice(_sample2)

        new_product = {"product_id": product_id,
                       "description": name}

        products.append(new_product)

    with open("products.json", "w") as f:
        f.write(json.dumps(products))
    return products


def create_businesses():
    """Creates some fake product data."""

    businesses = []

    for business_id in range(0, 50):

        name = fake.company()

        new_business = {"business_id": business_id,
                        "name": name,
                        "phone_number": fake.phone_number(),
                        "street_address": fake.street_address(),
                        "city": fake.city(),
                        "state": fake.state()}

        businesses.append(new_business)

    with open("businesses.json", "w") as f:
        f.write(json.dumps(businesses))
    return businesses


def create_prices():
    """Creates some fake prices from the existing files."""

    prices = []

    users = json.load(open("users.json"))
    businesses = json.load(open("businesses.json"))
    products = json.load(open("products.json"))

    for _ in range(0, 1000):
        user = random.choice(users)
        business = random.choice(businesses)
        product = random.choice(products)

        new_price = {"product": product["product_id"],
                     "business": business["business_id"],
                     "user": user["username"],
                     "price": random.randint(1000, 2000)}

        prices.append(new_price)

    with open("prices.json", "w") as f:
        f.write(json.dumps(prices))
    return prices


def main():
    create_users()
    create_products()
    create_businesses()
    create_prices()

if __name__ == '__main__':
    main()
