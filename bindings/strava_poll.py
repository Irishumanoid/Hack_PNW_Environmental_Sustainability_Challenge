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

swagger_client.configuration.access_token = 'f866f7ab7692ae8e615bd6466547e5fe4cefd7a6'
athlete_instance = swagger_client.AthletesApi()


strava_bp = Blueprint("strava", __name__)

@strava_bp.route("/athlete", methods = ['GET'])
@cross_origin()
def get_athlete():
    if request.method == 'GET':
        return make_api_call("/athlete", request.args.get("token"))
    

@strava_bp.route("/athlete/<id>/stats", methods = ['GET'])
@cross_origin()
def get_athlete_stats(id):
    if request.method == 'GET':
        return make_api_call('athletes/%s/stats' % id, request.args.get('token'))

    
@strava_bp.route("/get_relavant_segments", methods = ['GET'])
@cross_origin()
def get_relavant_segments():
    if request.method == 'GET':
        bounding_width = json.loads(request.args.get("bounding_width"))
        bounding_center = [json.loads(request.args.get("bounding_center_lat")), json.loads(request.args.get("bounding_center_long"))]
        #https://developers.strava.com/docs/reference/#api-Segments-exploreSegments:~:text=%5Bsouthwest%20corner%20latitutde%2C%20southwest%20corner%20longitude%2C%20northeast%20corner%20latitude%2C%20northeast%20corner%20longitude%5D
        bounding_rect = [bounding_center[0]-bounding_width/2, bounding_center[1]-bounding_width/2, bounding_center[0]+bounding_width/2, bounding_center[1]+bounding_width/2]
        bounds_string = "%f,%f,%f,%f" % (bounding_rect[0], bounding_rect[1], bounding_rect[2], bounding_rect[3])
        relavant_segments_lame = make_api_call("segments/explore?bounds="+bounds_string, request.args.get('token'))
        relavant_segments_cool = []
        if relavant_segments_lame != None:
            for segment in relavant_segments_lame.get("segments"):
                segment_id = segment.get("id")
                segment_cool = make_api_call("segments/"+str(segment_id), request.args.get('token'))
                relavant_segments_cool.append(segment_cool)
        print(relavant_segments_lame)
        return relavant_segments_lame


def make_api_call(path, token):
    print(path)
    return requests.get("https://www.strava.com/api/v3/" + path, headers={"Authorization": "Bearer " + token}).json()


#http://chrissytopher.com:5000/get_relavant_segments?token=f866f7ab7692ae8e615bd6466547e5fe4cefd7a6&bounding_width=10.0&bounding_center_lat=47.620832&bounding_center_long=122.337382