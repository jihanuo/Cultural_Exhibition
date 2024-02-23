# 名录
from flask import Blueprint, render_template

cultural_intro_blue = Blueprint("cultural_intro", __name__, url_prefix="/cultural_intro")

@cultural_intro_blue.route("")
def cultural_intro():
    return render_template("cultural_intro.html")
