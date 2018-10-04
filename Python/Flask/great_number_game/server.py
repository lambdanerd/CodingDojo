from flask import Flask, redirect, render_template, request, session, url_for
from random import randint


app = Flask(__name__)
app.secret_key = b'h6i5rpjwvmhnd93h2mirwfqxbqsdyzvj2ika0sxnth3b4ombin2r7hu2sa14'


@app.route('/', methods=['GET', 'POST'])
def index():
    if 'GET' in request.method:
        if 'actual_num' not in session:
            session['actual_num'] = randint(1, 100)
        return render_template('index.html')

    elif 'POST' in request.method:
        session['user_num'] = int(request.form['user_num'])
        return redirect(url_for('.index'))

    else:
        return 'Hey, you\'re not supposed to be here!'


@app.route('/reset')
def reset():
    session.pop('actual_num') if 'actual_num' in session else ...
    session.pop('user_num') if 'user_num' in session else ...
    return redirect(url_for('.index'))
