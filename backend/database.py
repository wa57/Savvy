import logging

import backend.config as config

from pymongo import MongoClient


logger = logging.getLogger("savvy.database")


logger.debug("Connecting to database...")
mongo = MongoClient(host=config.MONGO_HOST, socketTimeoutMS=2500, connectTimeoutMS=1000)
db = mongo[config.MONGO_DATABASE]
logger.debug("Connected to database.")


class DB(object):
    """Database parent class."""

    db = db
