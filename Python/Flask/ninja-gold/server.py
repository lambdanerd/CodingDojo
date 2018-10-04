
from random import randint
from flask import Flask, redirect, render_template, request, session, url_for


app = Flask(__name__)
app.secret_key = b'sp58cefpvgundtcivxhgln8asrgs1poejrwpsxlihbsvanlirshg8yw8ovv'


@app.route('/')
def index():
    if 'gold' not in session:
        session['gold']: int = 0

    if 'messages' not in session:
        session['messages']: list = []

    return render_template('index.html')


def _get_gold_range(location):
    return {
        'farm': (10, 20),
        'cave': (5, 10),
        'house': (2, 5),
        'casino': (-50, 50)
    }.get(location, (0, 0))


def _get_message(location, gold):
    return {
        'farm': {
            'color': 'green',
            'content': (f'Yee-haw, you\'re rich! You got {gold} gold from the \
                         farm.')
        },
        'cave': {
            'color': 'green',
            'content': (f'Echoes follow you out of the cave proclaiming that \
                        you got {gold} gold amongst the stalactites and \
                        stalagmites.')
        },
        'house': {
            'color': 'green',
            'content': (f'You left the house with {gold} gold and a few \
                        pieces of jewelry.')
        },
        'casino': {
            'color': 'green' if gold > 0 else 'red',
            'content': (f'You\'re a high roller! You earned {gold} gold from \
                        the casino' if gold > 0 else f'Ouch... you lost \
                        {gold} gold at the casino. Better luck next time!')
        }
    }.get(location)


@app.route('/process_gold', methods=['POST'])
def process_gold():
    location = request.form['building']
    gold_range = _get_gold_range(location)
    gold_delta = randint(gold_range[0], gold_range[1] + 1)
    message = _get_message(location, gold_delta)

    session['gold'] += gold_delta
    session['messages'].append(message)

    return redirect(url_for('.index'))


@app.route('/reset')
def reset():
    session.clear()
    return redirect(url_for('.index'))
=======
from flask import *
app = Flask(__name__)


@app.route('/')
def hello():
    return 'Hello World!'
