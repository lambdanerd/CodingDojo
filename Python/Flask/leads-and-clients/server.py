from flask import Flask, request, render_template, redirect, jsonify, Request
from mysqlconnection import connectToMySQL


app = Flask(__name__)
mysql = connectToMySQL("leadsdb")
clients = mysql.query_db("SELECT * FROM clients")


@app.route('/')
def index():
    return render_template('index.html', clients=clients)


@app.route('/clients')
def clients_api():
    return jsonify(clients)
