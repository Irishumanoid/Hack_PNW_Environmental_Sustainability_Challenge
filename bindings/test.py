import requests
from pprint import pprint

pprint(requests.get("https://www.strava.com/api/v3/athlete", headers={"Authorization": "Bearer f866f7ab7692ae8e615bd6466547e5fe4cefd7a6"}).json())
pprint(requests.get("https://www.strava.com/api/v3/segments/explore?bounds=0.0,0.0,0.0,0.0", headers={"Authorization": "Bearer f866f7ab7692ae8e615bd6466547e5fe4cefd7a6"}).json())