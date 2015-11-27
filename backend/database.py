import backend.config as config

from pymongo import MongoClient


mongo = MongoClient(host=config.MONGO_HOST)
db = mongo[config.MONGO_DATABASE]
