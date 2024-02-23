# 名录
from flask import Blueprint, render_template

game_blue = Blueprint("game", __name__, url_prefix="/game")
# skill_blue = Blueprint("skill", __name__, url_prefix="/skill")

@game_blue.route("")
def game():
    return render_template("game.html")

# @skill_blue.route("")
# def skill():
#     return render_template("skill.html")


# from flask import Blueprint, render_template

# about_blue = Blueprint("about", __name__, url_prefix="/about")

# @about_blue.route("")
# def about():
#     return render_template("about.html")

