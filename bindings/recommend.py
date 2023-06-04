import json
import bindings.strava_poll as sp
from flask import Blueprint, request, Response
from flask_cors import cross_origin


post_bp = Blueprint("suggestions", __name__)


def json_to_list(file, key:str) -> list[str]:
    data_map = json.loads(file)
    values = []
    for entry in len(data_map):
        values.append(entry[key])

    return values


def suggest_route(routes:list[str], param:str) -> list[str]:
    min_len, max_len = min(routes), max(routes)
    possible_routes = json_to_list(sp.get_relevant_segments())

    valid_routes = [i for i, entry in possible_routes if (entry[param] > min_len and entry[param] < max_len)]
    request.data += valid_routes



@post_bp.route("/get_suggestions", methods = ['PUT'])
@cross_origin()
def possible_routes():
    try:
        return Response(format(request.data))
    except IOError:
        print("no data to read/return")
    finally:
        request.data = None



