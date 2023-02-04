from flask import Blueprint
from studentBackend.api.model.welcome import WelcomeModel
from studentBackend.api.schema.welcome import WelcomeSchema

home_api = Blueprint('home_api', __name__)


@home_api.route('/')
def welcome():
    result = WelcomeModel()
    return WelcomeSchema().dump(result), 200
