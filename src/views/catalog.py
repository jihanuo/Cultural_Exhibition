# 名录
from flask import Blueprint, render_template

catalog_blue = Blueprint("catalog", __name__, url_prefix="/catalog")
skill_blue = Blueprint("skill", __name__, url_prefix="/skill")
music_blue = Blueprint("music", __name__, url_prefix="/music")
food_blue = Blueprint("food", __name__, url_prefix="/food")
dance_blue = Blueprint("dance", __name__, url_prefix="/dance")
tale_blue = Blueprint("tale", __name__, url_prefix="/tale")

@catalog_blue.route("")
def catalog():
    return render_template("catalog.html")

@skill_blue.route("")
def skill():
    return render_template("skill.html")

@music_blue.route("")
def music():
    return render_template("music.html")

@food_blue.route("")
def food():
    return render_template("food.html")

@dance_blue.route("")
def dance():
    return render_template("dance.html")

@tale_blue.route("")
def tale():
    return render_template("tale.html")
