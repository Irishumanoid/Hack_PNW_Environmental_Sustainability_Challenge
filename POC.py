import json
import flask
from flask import Flask, jsonify
from flask_cors import CORS, cross_origin


app = Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route("/")
@cross_origin()
def simple():
    return 'test hello Iris'


@app.route('/users', methods=["GET"])
@cross_origin()
def users():
    print("users endpoint reached...")
    with open("users.json", "r") as f:
        data = json.load(f)
        data.append({
            "username": "user4",
            "pets": ["hamster"]
        })
        return flask.jsonify(data)

@app.route('/trails', methods=["POST"])
def trails():
    content = request.json
    print(content['running_speed'])
    return jsonify({"trail-name": "def real trail :wink_emoji:", "trail-difficulty": "10+ idk"})


if __name__ == "__main__":
    app.run("localhost", 5000)