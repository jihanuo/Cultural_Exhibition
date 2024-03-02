import settings
from flask import Flask, render_template, request, redirect
from views.auth import auth_blue
from views.index import index_blue
from views.about import about_blue
from views.catalog import catalog_blue , skill_blue, music_blue, food_blue, dance_blue, tale_blue
from views.cultural_intro import cultural_intro_blue
from views.news import news_blue
from views.forum import forum_blue
from views.game import game_blue

app = Flask(__name__, static_folder="static", static_url_path="/static", template_folder="html")
app.secret_key = 'bello'
app.register_blueprint(index_blue)
app.register_blueprint(about_blue)
app.register_blueprint(catalog_blue)
app.register_blueprint(skill_blue)
app.register_blueprint(music_blue)
app.register_blueprint(food_blue)
app.register_blueprint(dance_blue)
app.register_blueprint(tale_blue)
app.register_blueprint(cultural_intro_blue)
app.register_blueprint(news_blue)
app.register_blueprint(auth_blue)
app.register_blueprint(forum_blue)
app.register_blueprint(game_blue)
