import json
import strava_poll as sp
from flask import Blueprint, request, Response
from flask_cors import cross_origin


post_bp = Blueprint("suggestions", __name__)


def json_to_list(file, key:str) -> list[str]:
    data_map = ""
    with open(file, 'r') as f:
        data_map = json.loads(f.read())
    return data_map[key]


print(json_to_list("bindings/dummy_data.json", "biggest_ride_distance"))


def suggest_route(routes:list[str], param:str) -> list[str]:
    min_len, max_len = min(routes), max(routes)
    possible = json_to_list(sp.get_relevant_segments())

    valid = [i for i, entry in possible if (entry[param] > min_len and entry[param] < max_len)]
    request.data += valid



@post_bp.route("/get_suggestions", methods = ['PUT'])
@cross_origin()
def possible_routes():
    try:
        return Response(format(request.data))
    except IOError:
        print("no data to read/return")
    finally:
        request.data = None



