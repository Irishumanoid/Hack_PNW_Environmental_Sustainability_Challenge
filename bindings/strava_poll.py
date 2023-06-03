import flask
from flask import Blueprint, request
import requests
import auth_consts

auth_url = "https://www.strava.com/oauth/token"
activites_url = "https://www.strava.com/api/v3/athlete/activities"

payload = {
    'client_id': auth_consts.client_id,
    'client_secret': auth_consts.client_secret,
    'refresh_token': auth_consts.refresh_token,
    'grant_type': "refresh_token",
    'f': 'json'
}

strava_bp = Blueprint("strava", __name__)

@strava_bp.route("/athlete", methods = ['GET'])
def get_athlete():
    if request.method == 'GET':
        res = requests.post(auth_url, data=payload, verify=False)
        access_token = res.json()['access_token']
        header = {'Authorization': 'Bearer ' + access_token}
        param = {'per_page': 200, 'page': 1}
        person_data = requests.get(activites_url, headers=header, params=param).json()
        return person_data