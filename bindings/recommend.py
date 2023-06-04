import json
import strava_poll as sp
from flask import Blueprint, request, Response
from flask_cors import cross_origin


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

print(json.dumps(vals_to_list(open("bindings/activity_data.json").read())))


def suggest_route(routes:list[str], param:str) -> list[str]:
    distances = []
    for run in routes.keys():
        if run == param:
            distances.append(run[param])
    
    min_len, max_len = min(routes), max(routes)
    possible = json_to_val(sp.get_relevant_segments_inner())

    valid = [i for i, entry in possible if (entry[param] > min_len and entry[param] < max_len)]
    request.data += valid
    return request.data



@post_bp.route("/get_suggestions", methods = ['PUT'])
@cross_origin()
def possible_routes():
    try:
        return Response(format(request.data))
    except IOError:
        print("no data to read/return")
    finally:
        request.data = None



