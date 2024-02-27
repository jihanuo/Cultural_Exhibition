import logging
import os
import json
from flask import Blueprint, request, render_template, redirect, url_for
from src.lib.auth import get_auth_status
from src.lib.forum import get_forum_themes,get_theme_info,set_theme_info

forum_blue = Blueprint("forum", __name__, url_prefix="/forum")

@forum_blue.route("", methods=["POST","GET"])
def forum():
    content = get_auth_status(request.cookies)
    path =  os.path.join("static/forum_video")# 文件夹目录
    files = os.listdir(path)
    videos={}
    for file in files:
        video_name = (file.split(".")[0]).split("/")[-1]
        videos[video_name] = os.path.join("static/forum_video",file)
    logging.info("files: {}".format(files))
    themes = get_forum_themes()
    themes_num = {}
    for theme in themes:
        comments= get_theme_info(theme,"评论")
        themes_num[theme] = len(comments)
    return render_template("forum.html",themes_num=themes_num,themes=themes,videos=videos, **content)

@forum_blue.route("/comments/<theme>", methods=["POST","GET"])
def forum_comments(theme):
    content = get_auth_status(request.cookies)
    theme_content = get_theme_info(theme, "内容")
    comments = get_theme_info(theme, "评论")
    print(comments)
    print(type(comments))
    content = get_auth_status(request.cookies)
    return render_template("forum_comments.html",theme=theme, comments=comments, theme_content=theme_content, **content)

@forum_blue.route("/comments/issue",methods=["POST","GET"])
def issue():
    content = get_auth_status(request.cookies)
    user_id =content["username"]
    comment = request.form["comment"]
    theme = request.form["theme"]
    comments = get_theme_info(theme, "评论")
    comment_id=str(int(list(comments.keys())[-1])+1)
    add_comment={
            "user_id":user_id,
            "content":comment
        }
    comments[comment_id] =add_comment
    set_theme_info(theme, "评论", comments)
    return redirect("/forum/comments/{}".format(theme))

@forum_blue.route("/comments/delete",methods=["POST","GET"])
def delete():
    content = get_auth_status(request.cookies)
    theme = request.form["theme"]
    comments = get_theme_info(theme, "评论")
    comment_id = request.form["comment_id"]
    del comments[comment_id]
    set_theme_info(theme, "评论", comments)
    return redirect("/forum/comments/{}".format(theme))
