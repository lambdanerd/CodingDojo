from flask import Flask, redirect, render_template, session, url_for


app = Flask(__name__)
app.secret_key = b'vigeu5brf45gd8ryaoh4ewnjfekdvbif3w8o4egihr9d0'


@app.route('/')
def index():
    if 'counter' not in session:
        session['counter'] = 1
    else:
        session['counter'] += 1
    return render_template('index.html')


@app.route('/destroy_session')
def destroy_session():
    session.clear()
    return redirect(url_for('index'))


@app.route('/double')
def double():
    session['counter'] += 1
    return redirect('/')
