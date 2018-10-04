import os

from flask import Flask, redirect, render_template, request, session, url_for
from flask_bcrypt import Bcrypt

from .mysqlconnection import connect_to_mysql
from .validations import validate_registration

app = Flask(__name__)
app.secret_key = os.urandom(254)
bcrypt = Bcrypt(app)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/login', methods=['POST'])
def login():
    if request.method == 'POST':
        login_email = request.form['login_email']

        mysql = connect_to_mysql('loginreg')
        query = 'SELECT pw_hash FROM wall_users WHERE email=%(email)s;'
        data = {'email': login_email}

        result = mysql.query_db(query, data)

        pw_hash_result = result[0]['pw_hash_result']

        bcrypt.check_password_hash(pw_hash_result,
                                   request.form['login_password'])
    else:
        return redirect(url_for('.index'))

    return redirect(url_for('.index'))


@app.route('/logout')
def logout():
    ...


@app.route('/register', methods=['POST'])
def register():
    if request.method == 'POST':
        validate_registration(request.form)

        pw_hash = bcrypt.generate_password_hash(request.form['password'])

        mysql = connect_to_mysql('loginreg')  # do this errytime okay?
        query = 'INSERT INTO wall_users (first_name, last_name, email, '\
                'pw_hash, created_at, updated_at) VALUES (%(first_name)s, '\
                '%(last_name)s, %(email)s, %(pw_hash)s, NOW(), NOW()); '
        data = {
            'first_name': request.form['first_name'],
            'last_name': request.form['last_name'],
            'email': request.form['email'],
            'pw_hash': pw_hash
        }
        mysql.query_db(query, data)
    else:
        return redirect(url_for('.index'))

    return redirect(url_for('.index'))
