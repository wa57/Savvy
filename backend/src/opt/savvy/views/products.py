from flask import Blueprint
from flask import request
from pymongo import MongoClient

from backend.src.opt.savvy.utils import json_error, json_success


class Product(object):
    """Class for products."""

    def __init__(self):
        pass


class ProductDB(object):
    """Class to connect to