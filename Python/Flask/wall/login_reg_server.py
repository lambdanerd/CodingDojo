# THIS IS JUST FROM THE LOGIN AND REGISTRATION ASSIGNMENT.
# DO NOT USE THIS FILE IN THE REAL APP

from flask import (Flask, flash, redirect, render_template, request, session,
                   url_for)
from flask_bcrypt import Bcrypt

from .mysqlconnection import connectToMySQL
from .validations import validate_registration, validate_login

app = Flask(__name__)
app.secret_key = b'hahahahahahahahahahahahahahahahahahahahahahahahahahahahahah'
bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        login_email = request.form['login_email']

        mysql = connectToMySQL('loginreg')
        query = 'SELECT pw_hash FROM users WHERE email=%(email)s;'
        data = {'email': login_email}

        result = mysql.query_db(query, data)

        pw_hash = result[0]['pw_hash']

        bcrypt.check_password_hash(pw_hash, request.form['login_password'])
    else:
        return redirect(url_for('.index'))

    return redirect(url_for('.index'))


@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        validate_registration(request.form)

        pw_hash = bcrypt.generate_password_hash(request.form['password'])

        mysql = connectToMySQL('loginreg')  # do this errytime okay?
        query = 'INSERT INTO users (first_name, last_name, email, pw_hash, created_at, updated_at) VALUES (%(first_name)s, %(last_name)s, %(email)s, %(pw_hash)s, NOW(), NOW());'
        data = {
            'first_name': request.form['first_name'],
            'last_name':  request.form['last_name'],
            'email': request.form['email'],
            'pw_hash': pw_hash
        }
        mysql.query_db(query, data)
    else:
        return redirect(url_for('.index'))

    return redirect(url_for('.index'))
