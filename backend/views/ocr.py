import base64

from flask import Blueprint
from flask import request

from backend.auth import login_required, current_user
from backend.models.ocr import get_text_from_image
from backend.utils import json_error, json_success, crossdomain

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
