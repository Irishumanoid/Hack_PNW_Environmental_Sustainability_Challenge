import requests
import urllib3
import logging
import http.client
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)

http.client.HTTPConnection.debuglevel = 1
logging.basicConfig()
logging.getLogger().setLevel(logging.DEBUG)
req_log = logging.getLogger("requests.packages.urllib3")
req_log.setLevel(logging.DEBUG)
req_log.propagate = True



auth_url = "https://www.strava.com/oauth/token"
import auth_consts

activites_url = "https://www.strava.com/api/v3/athlete/activities"

payload = {
    'client_id': auth_consts.client_id,
    'client_secret': auth_consts.client_secret,
    'refresh_token': auth_consts.refresh_token,
    'grant_type': "refresh_token",
    'f': 'json'
}

print("Requesting Token...\n")
#res = requests.post(auth_url, data=payload, verify=False) #use refresh token to get new access token
#print(res)

#access_token = res.json()['access_token']
print("Access Token: " + auth_consts.access_token)

header = {'Authorization': 'Bearer ' + "05449e7065f83c23de923eb6d745f7802fdf879b"}
param = {'per_page': 200, 'page': 1}
my_dataset = requests.get(activites_url, headers=header, params=param).json()

print(my_dataset)