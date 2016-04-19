import base64
import logging
import re

from flask import Blueprint
from flask import request

from backend.auth import login_required, current_user
from backend.models.ocr import get_text_from_image
from backend.utils import json_error, json_success, crossdomain


logger = logging.getLogger("backend.view.ocr")

ocr_blueprint = Blueprint("ocr", __name__, url_prefix="/api/v1/ocr")


@ocr_blueprint.route("/process", methods=["GET"])
@crossdomain(origin="*")
@login_required
def api_process_image():
    """Run OCR on an image."""
    import requests
    image_url = request.args.get("url", None)
    image_binary = requests.get(image_url).content or ""
    if not image_binary:
        return json_error("Unable to get image.")

    image_base64 = base64.b64encode(image_binary)

    text = get_text_from_image(image_base64)
    return json_success(text)


@ocr_blueprint.route("/get-products", methods=["GET"])
@crossdomain(origin="*")
def api_get_products_from_image():
    """Run OCR on an image."""
    import requests
    image_url = request.args.get("url", None)
    image_binary = requests.get(image_url).content or ""
    if not image_binary:
        return json_error("Unable to get image.")

    image_base64 = base64.b64encode(image_binary)

    text = get_text_from_image(image_base64)

    text = text.lower()     # Set everything to lower-case
    logger.debug("Start text: '{}'.".format(text))
    text = re.sub("\s+", " ", text)   # Remove new-lines and tabs. Set adjacent spacing to a single space
    text = re.sub("\s\d+\s", "", text)    # Remove anything that's only a digit
    text = re.sub("sub ?total.+$", "", text)  # Remove everything from the words "sub total" to the end of the receipt
    logger.debug("Final text: '{}'.".format(text))
    matches = re.findall("([a-z][a-z0-9 ]+?)\$?(\d{1,5}\.\d{1,5})", text)
    if matches:
        return json_success("OK", products=matches)
    return json_error("Unable to automatically read products from receipt.")
