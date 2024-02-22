import os
from flask_dropzone import Dropzone
from flask import Blueprint, render_template, request
dropzone = Dropzone()
admin_blue = Blueprint("admin", __name__, url_prefix="/admin")

@admin_blue.route("")
def admin():
    return render_template("admin.html")

@admin_blue.route('/uploads', methods=['POST', 'GET'])
def upload():
    if request.method == 'POST':
        f = request.files.get('file')
        if f.filename.split('.')[1] != 'png':
            return 'PNG only!', 400  # return the error message, with a proper 4XX code
        f.save(os.path.join("static/index_img", f.filename))
    return render_template('index.html')
