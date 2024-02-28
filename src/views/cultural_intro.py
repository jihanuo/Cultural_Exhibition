# 名录
import json
from flask import Blueprint, render_template
from lib.data_base import read_filedata
from lib.log import logging
cultural_intro_blue = Blueprint("cultural_intro", __name__, url_prefix="/cultural_intro")

@cultural_intro_blue.route("")
def cultural_intro():   
    return render_template("cultural_intro.html")


@cultural_intro_blue.route("/json")
def data_json():
    data = read_filedata("cultural_intro")
    logging.info(data)
    json_data = json.dumps(data,ensure_ascii=False)
    logging.info(json_data)
    return json_data
