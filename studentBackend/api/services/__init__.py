import mongoengine as db
from os import environ as env

db.connect(db="Ed360", username="im_still_thinking", password="zephyrus1234", host=env.get("MONGODB_CONNECTION_STRING"))
