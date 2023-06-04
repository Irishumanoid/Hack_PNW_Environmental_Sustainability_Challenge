import os
import requests
import urllib3
import pandas as pd
import numpy as np
import time
import matplotlib.pyplot as plt
import folium
import polyline
import base64
from tqdm import tqdm# disable warnings
urllib3.disable_warnings(urllib3.exceptions.InsecureRequestWarning)
import json
import auth_consts

client_id = auth_consts.client_id
client_secret = auth_consts.client_secret
refresh_token = auth_consts.refresh_token

def get_access_token(client_id, client_secret, refresh_token):
    oauth_url = "https://www.strava.com/oauth/token"
 
    payload = {
    'client_id': auth_consts.client_id,
    'client_secret': auth_consts.client_secret,
    'code': auth_consts.auth_code,
    'refresh_token': auth_consts.refresh_token,
    'grant_type': "refresh_token",
    'f': 'json'
    }
    
    #generate new access token
    req = requests.post(url=oauth_url, data=payload, verify=False)
    access_token = req.json()['access_token']
    print("Access Token = {}\n".format(str(access_token)))

    return access_token

access_token = get_access_token(client_id, client_secret, refresh_token)


def get_data(access_token, per_page=200, page=1):
     
   activities_url = 'https://www.strava.com/api/v3/athlete/activities'
   headers = {'Authorization': 'Bearer ' + access_token}
   params = {'per_page': per_page, 'page': page}
   
   data = requests.get(
       activities_url, 
       headers=headers, 
       params=params
   ).json()
 
   return data

max_number_of_pages = 10
data = list()
for page_number in tqdm(range(1, max_number_of_pages + 1)):
    page_data = get_data(access_token, page=page_number)
    if page_data == []:
        break
    data.append(page_data)

not_null_data = []
for i in data:
    not_null_data.extend(i)


#print(pd.json_normalize(not_null_data))
    


