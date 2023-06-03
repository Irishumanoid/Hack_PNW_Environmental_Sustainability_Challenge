import json
import flask
from flask import Flask, jsonify


app = Flask(__name__)

@app.route("/")
def simple():
    return 'test hello Iris'


@app.route('/users', methods=["GET"])
def users():
    print("users endpoint reached...")
    with open("users.json", "r") as f:
        data = json.load(f)
        data.append({
            "username": "user4",
            "pets": ["hamster"]
        })
        return flask.jsonify(data)

if __name__ == "__main__":
    app.run("localhost", 5000)