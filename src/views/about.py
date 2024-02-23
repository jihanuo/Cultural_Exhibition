from flask import Blueprint, render_template

about_blue = Blueprint("about", __name__, url_prefix="/about")

@about_blue.route("")
def about():
    return render_template("about.html")
