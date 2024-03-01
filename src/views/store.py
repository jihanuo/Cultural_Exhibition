from flask import Blueprint, render_template
from lib.store import get_good_info, get_good_list
import os

store_blue = Blueprint("store", __name__, url_prefix="/store")


@store_blue.route("")
def store():
    goods = get_good_list()
    goods_intro={}
    goods_person_intro={}
    for good in goods:
        goods_intro[good]=get_good_info(good,"商品介绍")
        goods_person_intro[good]=get_good_info(good,"传承人介绍")
    path =  os.path.join("static/store")
    files = os.listdir(path)
    goods_img={}
    for file in files:
        good_name = (file.split(".")[0]).split("/")[-1]
        goods_img[good_name] = os.path.join("static/store",file)    
    return render_template("store.html", goods_intro = goods_intro, goods_img = goods_img, goods_person_intro = goods_person_intro,goods=goods)