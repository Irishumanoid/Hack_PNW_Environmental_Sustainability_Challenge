# Hack_PNW_Environmental_Sustainability_Challenge

- Extract strava data that recommends strava trails using strava API
- react for frontend
- python backend
- activity recommendations
- encourage people to engage in more environmentally friendly activities by
- daily fast fasts about environmental sustainability
- clustering algorithm for fitness range <-> trail grade, length, etc.


specific details: 
1. user authenticates into their account
2. site cumulatively analyzes route data to give route suggestions
3. extra: detects if location is within walking distances
4. extra: provides fast environmental facts every day, badges for accomplishments/going places


implementation details:
 1. flask web server; reference: https://tms-dev-blog.com/python-backend-with-javascript-frontend-how-to/
 2. frontend authenticates and sends user data to backend
 3. backend runs clustering algorithm and pulls data from Strava API to generate trail recommendations
 4. frontend gets recommendations from backend