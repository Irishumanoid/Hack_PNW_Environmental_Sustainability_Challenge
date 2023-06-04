import json
import bindings.strava_poll as sp
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
        run['elev_difference'] = raw.get('elev_difference')
        runs.append(run)
    return runs

#print(json.dumps(vals_to_list(open("bindings/activity_data.json").read())))


def get_user_score(user_routes) -> int:
    difficulty = {}

    distances = []
    for route in user_routes:
        distances.append(route['distance'])
    
    #convert to integer from string
    # for i in distances:
    #     distances[i] = eval(distances[i])

    mean = np.mean(distances)
    stdev = np.std(distances)
    
    for route in distances:
        if route > mean - 3*stdev and route < mean - 3*stdev:
            diff = (route-np.min(distances))/(np.max(route)-np.min(route))
        else: 
            diff = 0
        difficulty[route] = diff

    rank_list = []
    for entry in difficulty.values():
        rank_list.append(entry)

    return np.mean(rank_list)


def get_single_route_difficulty(route):
    dist, elevation_gain = float(route["distance"]), float(route["elev_difference"])
    min_d, max_d, min_e, max_e = 0.5, 26.2, 10, 500
    difficulty = np.sqrt((dist-min_d)/(max_d-min_d)**2+(elevation_gain-min_e)/(max_e-min_e)**2)
    return difficulty


@post_bp.route("/get_suggestions", methods = ['PUT'])
@cross_origin()
def possible_routes():
    try:
        return Response(format(request.data))
    except IOError:
        print("no data to read/return")
    finally:
        request.data = None



