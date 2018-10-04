from flask import Flask, render_template


app = Flask(__name__)


@app.route('/play', defaults={'boxes': 3, 'color': 'lightskyblue'})
@app.route('/play/<int:boxes>', defaults={'color': 'lightskyblue'})
@app.route('/play/<int:boxes>/<string:color>')
def play(boxes, color):
    return render_template('index.html', boxes=boxes, color=color)
