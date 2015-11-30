import backend.config as config

from pymongo import MongoClient


mongo = MongoClient(host=config.MONGO_HOST)
db = mongo[config.MONGO_DATABASE]


class DB(object):
    """Database parent class."""

    def __init__(self):
        self.db = db
