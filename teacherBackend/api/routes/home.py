from flask import Blueprint
from teacherBackend.api.model.welcome import WelcomeModel
from teacherBackend.api.schema.welcome import WelcomeSchema

home_api = Blueprint('home_api', __name__)


@home_api.route('/')
def welcome():
    result = WelcomeModel()
    return WelcomeSchema().dump(result), 200
