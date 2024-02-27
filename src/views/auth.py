from flask import request, Flask, render_template, redirect, flash, url_for
from src.lib.auth import get_auth_status, do_the_login, do_the_register, do_the_logout
from flask import Blueprint, make_response, session
from src.lib.log import logging


auth_blue = Blueprint("auth", __name__, url_prefix="/auth")


@auth_blue.route("/login", methods=["POST"])
def login():
    # login
    username = request.form["nick_name"]
    password = request.form["password"]
    status, action, token = do_the_login(username, password)
    logging.debug(f"login: redirect to {request.referrer}")
    resp = redirect(request.referrer)
    resp.set_cookie("status", str(status))
    if status:
        resp.set_cookie("name", username)
    flash(action)
    resp.set_cookie("action", action)
    resp.set_cookie("token", token)
    return resp

@auth_blue.route("/logout", methods=["POST"])
def logout():
    token = request.cookies.get("token", None)
    do_the_logout(token)
    logging.debug(f"logout: redirect to {request.referrer}")
    resp = redirect(request.referrer)
    resp.delete_cookie("status")
    resp.delete_cookie("action")
    resp.delete_cookie("token")
    resp.delete_cookie("name")
    return resp
