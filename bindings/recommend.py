import json
import strava_poll as sp
from flask import Blueprint, request, Response
from flask_cors import cross_origin
import numpy as np


post_bp = Blueprint("suggestions", __name__)


def json_to_val(file, key:str) -> str:
    data_map = ""
    with open(file, 'r') as f:
        data_map = json.loads(f.read())
    return data_map[0][key]


def vals_to_list(file):
    runs = []
    for raw in json.loads(file):
        run = {}
        run['distance'] = raw.get('distance')
        run['moving_time'] = raw.get('moving_time')
        run['total_elevation_gain'] = raw.get('total_elevation_gain')
        runs.append(run)
    return runs

#print(json.dumps(vals_to_list(open("bindings/activity_data.json").read())))


def get_user_score(user_routes) -> int:
    difficulty = {}

    distances = []
    for route in user_routes:
        if route == 'distance':
            distances.append(route['distance'])
    
    distances = [eval(i) for i in distances] #convert to integer from string

    mean = np.mean(distances)
    stdev = np.std(distances)
    
    for route in distances:
        if route['distance'] > mean - 3*stdev and route['distance'] < mean - 3*stdev:
            diff = (route['distance']-np.min(distances))/(np.max(route['distance'])-np.min(route['distance']))
        else: 
            diff = 0
        difficulty[route] = diff

    rank_list = []
    for entry in difficulty.values():
        rank_list.append(entry)

    return np.mean(rank_list)





def get_single_route_difficulty():
    pass


@post_bp.route("/get_suggestions", methods = ['PUT'])
@cross_origin()
def possible_routes():
    try:
        return Response(format(request.data))
    except IOError:
        print("no data to read/return")
    finally:
        request.data = None



