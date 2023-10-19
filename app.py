from flask import Flask, request, render_template, jsonify, send_from_directory, url_for
import smtplib
from email.message import EmailMessage

app = Flask(__name__, static_url_path='/myapp/static')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/static/<path:filename>')
def serve_static(filename):
    return send_from_directory('static', filename)

if __name__ == '__main__':
    app.run()
