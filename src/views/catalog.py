# 名录
from flask import Blueprint, render_template

catalog_blue = Blueprint("catalog", __name__, url_prefix="/catalog")
skill_blue = Blueprint("skill", __name__, url_prefix="/skill")

@catalog_blue.route("")
def catalog():
    return render_template("catalog.html")

@skill_blue.route("")
def skill():
    return render_template("skill.html")
