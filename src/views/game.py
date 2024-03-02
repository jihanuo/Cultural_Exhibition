# 名录
from flask import Blueprint, render_template

game_blue = Blueprint("game", __name__, url_prefix="/game")

@game_blue.route("")
def game():
    return render_template("game.html")
