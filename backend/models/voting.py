import logging
from datetime import datetime

from bson.timestamp import Timestamp

from backend.database import DB

logger = logging.getLogger("savvy.models.voting")


class VotingDB(DB):
    """Provides controls for User Database."""

    def vote(self, user_id, product_id, vote=None):
        """Get or set a vote

        Votes are represented in Integer form as
            Vote Up     = 1
            Vote Down   = -1
            No Vote     = 0

        :param str user_id: A user_id string.
        :param str product_id: A product_id string.
        :param str vote: 1, -1, or 0.

        :returns: The current vote integer if vote is not supplied or the updated vote if vote is supplied
        :rtype: bool
        """
        if vote:
            vote = int(vote)
            assert vote in (1, -1, 0), "Vote score must be 1, -1, or 0"
            result = self.db.voting.update_one(
                {
                    "user_id": user_id,
                    "product_id": product_id
                },
                {
                    "$set": {
                        "vote": vote,
                        "submitted_timestamp": Timestamp(datetime.now(), 1)
                    },
                },
                upsert=True
            )
            return vote
        result = self.db.voting.find_one({
            "user_id": user_id,
            "product_id": product_id
        })
        return int(result["vote"])

    def get_product_score(self, product_id):
        result = self.db.voting.aggregate([
            {
                "$match":
                {
                    "product_id": product_id
                }
            },
            {
                "$group":
                {
                    "_id": "$product_id",
                    "score": {"$sum": "$vote"}
                }
            }
        ])
        try:
            score = int(result.next()["score"])
            logger.debug("Retrieved score for product '{}' = {}".format(product_id, score))
        except StopIteration:
            logger.warning("Unable to retrieve score for product '{}'".format(product_id))
            score = 0
        return score

    def get_user_history(self, user_id):
        result = self.db.voting.find({
            "user_id": user_id
        })
        try:
            results = list(result)
            logger.debug("Retrieved voting history for user '{}'".format(user_id))
        except StopIteration:
            logger.warning("Unable to retrieve voting history for user '{}'".format(user_id))
            results = []
        return results

    def get_product_history(self, product_id):
        result = self.db.voting.find({
            "product_id": product_id
        })
        try:
            results = list(result)
            logger.debug("Retrieved voting history for product '{}'".format(product_id))
        except StopIteration:
            logger.warning("Unable to retrieve voting history for product '{}'".format(product_id))
            results = []
        return results
