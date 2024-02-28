from flask import Blueprint, render_template
import json
from lib.data_base import read_filedata
from lib.log import logging

news_blue = Blueprint("news", __name__, url_prefix="/news")

@news_blue.route("")
def news():
    return render_template("news.html")
@news_blue.route("/json")
def data_json():
    data = read_filedata("news")
    logging.info(data)
    json_data = json.dumps(data,ensure_ascii=False)
    logging.info(json_data)
    return json_data