from flask import Flask, render_template, redirect, request, session, url_for


app = Flask(__name__)
app.secret_key = b'b5geih79vdr8sofung5f'


@app.route('/')
def index():
    return 'Hello, world!'
