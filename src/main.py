from flask import Flask, render_template, request, redirect
from views.index import index_blue
from views.admin import admin_blue,dropzone
from views.about import about_blue
from views.catalog import catalog_blue , skill_blue
from views.cultural_intro import cultural_intro_blue

def create_app():
    app = Flask(__name__, static_folder="static", static_url_path="/static", template_folder="html")
    dropzone.init_app(app)
    app.register_blueprint(index_blue)
    app.register_blueprint(admin_blue)
    app.register_blueprint(about_blue)
    app.register_blueprint(catalog_blue)
    app.register_blueprint(skill_blue)
    app.register_blueprint(cultural_intro_blue)
    return app


