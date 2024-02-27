import logging

from flask import Blueprint, render_template, request
import os

from src.lib.auth import get_auth_status

index_blue= Blueprint("index", __name__, url_prefix="/")
@index_blue.route("")
def index():
    content = get_auth_status(request.cookies)
    path =  os.path.join("static/index_img")# 文件夹目录
    files = os.listdir(path)
    images=[]
    for file in files:
        images.append(os.path.join("static/index_img",file))
    logging.info("files: {}".format(files))
    return render_template("index.html", images=images, **content)
