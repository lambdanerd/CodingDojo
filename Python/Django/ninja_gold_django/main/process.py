from random import randint
from .locations import FARM, CAVE, HOUSE, CASINO


def _get_gold_range(location):
    return {
        FARM: (10, 20),
        CAVE: (5, 10),
        HOUSE: (2, 5),
        CASINO: (-50, 50)
    }.get(location, (0, 0))


def _get_message(location, gold):
    return {
        FARM: {
            'color': 'green',
            'content': (f'Yee-haw, you\'re rich! You got {gold} gold from the \
                         farm.')
        },
        CAVE: {
            'color': 'green',
            'content': (f'Echoes follow you out of the cave proclaiming that \
                        you got {gold} gold amongst the stalactites and \
                        stalagmites.')
        },
        HOUSE: {
            'color': 'green',
            'content': (f'You left the house with {gold} gold and a few \
                        pieces of jewelry.')
        },
        CASINO: {
            'color': 'green' if gold > 0 else 'red',
            'content': (f'You\'re a high roller! You earned {gold} gold from \
                        the casino' if gold > 0 else f'Ouch... you lost \
                        {gold} gold at the casino. Better luck next time!')
        }
    }.get(location)


def process(location):
    gold_range = _get_gold_range(location)
    gold_delta = randint(gold_range[0], gold_range[1] + 1)
    message = _get_message(location, gold_delta)

    return (gold_delta, message)
