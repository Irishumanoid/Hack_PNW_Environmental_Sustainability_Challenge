import flask
from flask import Blueprint, request
import requests

auth_url = "https://www.strava.com/oauth/token"
activites_url = "https://www.strava.com/api/v3/athlete/activities"

payload = {
    'client_id': "xxxx",
    'client_secret': 'xxxx',
    'refresh_token': 'xxxx',
    'grant_type': "refresh_token",
    'f': 'json'
}

bp = Blueprint("strava", __name__)

@bp.route("/athlete", methods = ['GET'])
def get_athlete():
    if request.method == 'GET':
        res = requests.post(auth_url, data=payload, verify=False)
        access_token = res.json()['access_token']
        header = {'Authorization': 'Bearer ' + access_token}
        param = {'per_page': 200, 'page': 1}
        person_data = requests.get(activites_url, headers=header, params=param).json()
        return person_data