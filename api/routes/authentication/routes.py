from flask import Blueprint, url_for, session, redirect, request
from flask_cors import cross_origin
from os import environ as env
from urllib.parse import quote_plus, urlencode

auth_bp = Blueprint('auth', __name__)
state = ["", "", ""]


def register_auth_routes(oauth):
    @auth_bp.route('/login/')
    @cross_origin()
    def login():
        redirect_uri = request.args.get("redirect_uri")
        if redirect_uri is None:
            redirect_uri = url_for("home_api.welcome")

        resp = oauth.auth0.authorize_redirect(
            redirect_uri=url_for(".callback", _external=True)
        )

        url = resp.headers.get("Location")
        print(url)

        state[1] = url[url.rindex("state") + 6: url.rindex("&")]
        state[2] = redirect_uri

        return redirect(url)

    @auth_bp.route('/callback/')
    @cross_origin()
    def callback():
        token = oauth.auth0.authorize_access_token()
        state[0] = request.args.get("code")
        session["user"] = token
        return state

    @auth_bp.route('/logout/')
    def logout():
        session.clear()
        return redirect(
            "https://" + env.get("AUTH0_DOMAIN")
            + "/v2/logout?"
            + urlencode(
                {
                    "returnTo": url_for("home_api.welcome", _external=True),
                    "client_id": env.get("AUTH0_CLIENT_ID"),
                },
                quote_via=quote_plus,
            )
        )
