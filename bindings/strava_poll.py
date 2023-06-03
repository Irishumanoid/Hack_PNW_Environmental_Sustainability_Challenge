from flask import Blueprint, request, jsonify
from flask_cors import CORS, cross_origin
import requests
import json
import swagger_client
from swagger_client.rest import ApiException
from pprint import pprint

auth_url = "https://www.strava.com/oauth/token"
activites_url = "https://www.strava.com/api/v3/athlete/activities"
explore_segments_url = "https://www.strava.com/api/v3/segments/explore"
get_segment_url = "https://www.strava.com/api/v3/segments/"
payload = {
    'client_id': '108420',
    'client_secret': 'c5fa6be66dd05a05457299416063ded1a329f835',
    'refresh_token': 'f866f7ab7692ae8e615bd6466547e5fe4cefd7a6',
    'grant_type': "refresh_token",
    'f': 'json'
}

strava_bp = Blueprint("strava", __name__)

@strava_bp.route("/athlete", methods = ['GET'])
@cross_origin()
def get_athlete():
    if request.method == 'GET':
        # Configure OAuth2 access token for authorization: strava_oauth
        swagger_client.configuration.access_token = request.args.get("token")

        # create an instance of the API class
        api_instance = swagger_client.AthletesApi()
        api_response = api_instance.get_logged_in_athlete()
        return api_response
    
@strava_bp.route("/get_relavant_segments", methods = ['GET'])
@cross_origin()
def get_relavant_segments():
    if request.method == 'GET':
        bounding_width = json.loads(request.args.get("bounding_width"))
        bounding_center = json.loads(request.args.get("bounding_center"))
        #https://developers.strava.com/docs/reference/#api-Segments-exploreSegments:~:text=%5Bsouthwest%20corner%20latitutde%2C%20southwest%20corner%20longitude%2C%20northeast%20corner%20latitude%2C%20northeast%20corner%20longitude%5D
        bounding_rect = [bounding_center[0]-bounding_width/2, bounding_center[1]-bounding_width/2, bounding_center[0]+bounding_width/2, bounding_center[1]+bounding_width/2]
        api_instance = swagger_client.SegmentsApi()
        relavant_segments_lame = api_instance.explore_segments(bounding_rect)
        relavant_segments_cool = []
        for segment in relavant_segments_lame:
            segment_id = segment.id
            api_instance = swagger_client.SegmentsApi()
            segment_cool = api_instance.getSegmentById(segment_id)
            relavant_segments_cool.append(segment_cool)
        return jsonify(relavant_segments_cool)