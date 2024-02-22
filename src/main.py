from flask import Flask, render_template, request, redirect
from views.index import index_blue
from views.admin import admin_blue,dropzone

def create_app():
    app = Flask(__name__, static_folder="static", static_url_path="/static", template_folder="html")
    dropzone.init_app(app)
    app.register_blueprint(index_blue)
    app.register_blueprint(admin_blue)
    return app



