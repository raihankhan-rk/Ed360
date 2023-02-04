import requests
from flask import Blueprint, request
from flask_cors import cross_origin

apyHub_bp = Blueprint('apyHub', __name__)


@apyHub_bp.route("/getAttendanceChart", methods=['POST'])
@cross_origin()
def getAttendanceChart():
    if request.method == 'post' or request.method == 'POST':
        data = request.get_json()
        resp = requests.post('https://api.apyhub.com/generate/charts/pie/url',
                             headers=
                             {
                                 'apy-token': 'APT0ezbHwZe9HuBi5kXGjedIqMu4v4YrdbSerW8wszGK8E',
                             },

                             json={
                                 'title': 'Attendance',
                                 'theme': 'Light',
                                 'data': [
                                     {
                                         'label': 'Present',
                                         'value': data['present']
                                     },
                                     {
                                         'label': 'Absent',
                                         'value': data['absent']
                                     }]
                             },
                             )

        return resp.text



