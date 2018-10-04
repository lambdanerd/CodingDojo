from flask import Flask, redirect, render_template, request  # type: ignore
from mysqlconnection import connectToMySQL


app = Flask(__name__)


mysql = connectToMySQL("friendsdb")


@app.route('/')
def index():
    all_friends: List[Dict[str, str]] = mysql.query_db("SELECT * FROM friends")
    print("Fetched all friends", all_friends)
    return render_template('index.html', friends=all_friends)


@app.route('/create_friend', methods=['POST'])
def create():
    query: str = "INSERT INTO friends (first_name, last_name, occupation, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(occupation)s, NOW(), NOW());"
    data: Dict[str, str] = {
        'first_name': request.form['first_name'],
        'last_name':  request.form['last_name'],
        'occupation': request.form['occupation']
    }
    mysql.query_db(query, data)
    return redirect('/')
