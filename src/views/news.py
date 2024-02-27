from flask import Blueprint, render_template

news_blue = Blueprint("news", __name__, url_prefix="/news")

@news_blue.route("")
def news():
    return render_template("news.html")
