from flask import Flask

app = Flask(__name__)


@app.route("/")
def simple():
    return f'test hello crystal'


if __name__ == "__main__":
    app.run("localhost", 5000)