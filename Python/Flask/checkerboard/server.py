from flask import Flask, render_template


app = Flask(__name__)


@app.route('/', defaults={'cols': 8, 'rows': 8})
@app.route('/<cols>/<rows>')
def index(cols, rows):
    cols = int(cols)
    rows = int(rows)
    return render_template('index.html', cols=cols, rows=rows)
