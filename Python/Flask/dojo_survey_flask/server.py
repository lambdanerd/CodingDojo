from flask import Flask, render_template, redirect, request, session, url_for


app = Flask(__name__)
app.secret_key = b'8yshv5iejfeshrgrcvycg80ew3rhuow4'


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/submit', methods=['POST'])
def submit():
    if request.method == 'POST':
        session['name'] = request.form['name']
        session['location'] = request.form['location']
        session['language'] = request.form['language']
        session['comment'] = request.form['comment']
        return redirect(url_for('result'))
    else:
        return 'Error'


@app.route('/result')
def result():
    return render_template('result.html')
