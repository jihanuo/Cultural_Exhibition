import os
from flask import Blueprint, request, render_template
from src.lib.auth import get_auth_status


forum_blue = Blueprint("forum", __name__, url_prefix="/forum")

@forum_blue.route("", methods=["POST","GET"])
def forum():
    content = get_auth_status(request.cookies)
    return render_template("forum.html", **content)
