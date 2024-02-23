from flask import Flask, render_template, request, redirect

from views.auth import auth_blue
from views.index import index_blue
from views.admin import admin_blue,dropzone
from views.forum import forum_blue
def create_app():
    app = Flask(__name__, static_folder="static", static_url_path="/static", template_folder="html")
    app.secret_key = 'bello'
    dropzone.init_app(app)
    app.register_blueprint(index_blue)
    app.register_blueprint(admin_blue)
    app.register_blueprint(auth_blue)
    app.register_blueprint(forum_blue)
    return app



