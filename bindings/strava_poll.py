from flask import Blueprint, request, jsonify
import requests
import auth_consts
import json

auth_url = "https://www.strava.com/oauth/token"
activites_url = "https://www.strava.com/api/v3/athlete/activities"
explore_segments_url = "https://www.strava.com/api/v3/segments/explore"
get_segment_url = "https://www.strava.com/api/v3/segments/"
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
    
@bp.route("/get_relavant_segments", methods = ['GET'])
def get_relavant_segments():
    if request.method == 'GET':
        bounding_width = json.loads(request.args.get("bounding_width"))
        bounding_center = json.loads(request.args.get("bounding_center"))
        #https://developers.strava.com/docs/reference/#api-Segments-exploreSegments:~:text=%5Bsouthwest%20corner%20latitutde%2C%20southwest%20corner%20longitude%2C%20northeast%20corner%20latitude%2C%20northeast%20corner%20longitude%5D
        bounding_rect = [bounding_center[0]-bounding_width/2, bounding_center[1]-bounding_width/2, bounding_center[0]+bounding_width/2, bounding_center[1]+bounding_width/2]
        params = { "bounds": bounding_rect }
        relavant_segments_lame = requests.get(explore_segments_url, params=params).json()
        relavant_segments_cool = []
        for segment in relavant_segments_lame:
            segment_id = segment.id
            segment_cool = requests.get(get_segment_url+segment_id).json()
            relavant_segments_cool.append(segment_cool)
        return jsonify(relavant_segments_cool)