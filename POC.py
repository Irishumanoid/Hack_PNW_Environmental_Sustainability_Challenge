import json
from bindings import recommend, strava_poll
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin

app = Flask(__name__)
app.register_blueprint(strava_poll.strava_bp)
app.register_blueprint(recommend.post_bp)

@app.route("/")
def simple():
    return 'test hello crystal'


@app.route('/trails', methods=["POST"])
@cross_origin()
def trails():
    content = request.json
    print(content['running_speed'])
    return jsonify({"trail-name": "def real trail :wink_emoji:", "trail-difficulty": "10+ idk"})


if __name__ == "__main__":
    app.run("localhost", 5000)