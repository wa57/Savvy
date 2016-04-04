import base64
import logging
import os

from googleapiclient import discovery
from googleapiclient import errors
from oauth2client.client import GoogleCredentials

from backend.config import GOOGLE_CLOUD_VISION_KEY


logger = logging.getLogger("backend.models.ocr")


os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = os.path.abspath(GOOGLE_CLOUD_VISION_KEY)


BATCH_SIZE = 10


class GoogleVisionApi(object):
    """Construct and use the Google Vision API service."""

    DISCOVERY_URL = 'https://{api}.googleapis.com/$discovery/rest?version={apiVersion}'

    def __init__(self, api_discovery_file='vision_api.json'):
        self.credentials = GoogleCredentials.get_application_default()
        self.service = discovery.build('vision', 'v1', credentials=self.credentials,
                                       discoveryServiceUrl=self.DISCOVERY_URL)

    def detect_text(self, base64_images, num_retries=3, max_results=6):
        """Uses the Vision API to detect text in the given file.
        """
        batch_request = []
        for base64_image in base64_images:
            batch_request.append({
                'image': {
                    'content': base64_image.decode('UTF-8')
                },
                'features': [{
                    'type': 'TEXT_DETECTION',
                    'maxResults': max_results,
                }]
            })
        request = self.service.images().annotate(body={'requests': batch_request})

        try:
            responses = request.execute(num_retries=num_retries)
            if 'responses' not in responses:
                return {}
            text_response = {}
            for image, response in zip(base64_images, responses['responses']):
                hex = image[-12:]
                if 'error' in response:
                    logger.error("API Error for %s: %s" % (
                            hex,
                            response['error']['message']
                            if 'message' in response['error']
                            else ''))
                    continue
                if 'textAnnotations' in response:
                    text_response[hex] = response['textAnnotations']
                else:
                    text_response[hex] = []
            return text_response
        except errors.HttpError as e:
            logger.error("Http Error for %s: %s" % (hex, e))
        except KeyError as e2:
            logger.error("Key error: %s" % e2)

vision = GoogleVisionApi()


def extract_description(texts):
    """Returns all the text in text annotations as a single string"""
    document = ''
    for text in texts:
        try:
            document += text['description']
        except KeyError as e:
            logger.error('KeyError: %s\n%s' % (e, text))
    return document


def extract_descriptions(input_filename, texts):
    """Gets and indexes the text that was detected in the image."""
    if texts:
        document = extract_description(texts)
        return document
    else:
        if not texts:
            print('%s had no discernible text.' % input_filename)


def get_text_from_image(base64_image):
    """Call the Vision API on a file and index the results."""
    texts = vision.detect_text([base64_image,])
    output = ""
    for filename, text in texts.items():
        output += extract_descriptions(filename, text)
    return output
