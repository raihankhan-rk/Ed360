from os import environ as env

from authlib.integrations.flask_client import OAuth

from flask import Flask, redirect, url_for
from flask_cors import CORS

app = Flask(__name__)
app.secret_key = env.get("APP_SECRET_KEY")
app.config.from_pyfile('config.py')

CORS(app)

from api.routes.authentication.routes import register_auth_routes, auth_bp
from api.routes.home import home_api
from api.routes.teacher.routes import teacher_bp

oauth = OAuth(app)
oauth.register(
    "auth0",
    client_id=env.get("AUTH0_CLIENT_ID"),
    client_secret=env.get("AUTH0_CLIENT_SECRET"),
    client_kwargs={
        "scope": "openid profile email",
    },
    server_metadata_url=f'https://{env.get("AUTH0_DOMAIN")}/.well-known/openid-configuration'
)

register_auth_routes(oauth)


@app.route("/")
def root():
    return redirect(url_for("home_api.welcome"))


app.register_blueprint(home_api, url_prefix='/api')
app.register_blueprint(auth_bp, url_prefix="/api/auth")
app.register_blueprint(teacher_bp, url_prefix="/api/teacher")

if __name__ == '__main__':
    from argparse import ArgumentParser

    parser = ArgumentParser()
    parser.add_argument('-p', '--port', default=3000, type=int)
    args = parser.parse_args()
    port = args.port

    app.run(host='0.0.0.0', port=port, debug=True)

