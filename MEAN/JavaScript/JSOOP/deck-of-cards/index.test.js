import Card from './card';
import Suit from './suit';
import Value from './value';

it('should return a name and a unicode escape sequence', () => {
  expect(Suit.hearts).toBe({ name: 'Hearts', unicode: '\u{2665}' });
  expect(Suit.clubs).toBe({ name: 'Clubs', unicode: '\u{2663}' });
  expect(Suit.diamonds).toBe({ name: 'Diamonds', unicode: '\u{2666}' });
  expect(Suit.spades).toBe({ name: 'Spades', unicode: '\u{2660}' });
});

it('should return a list of all suits', () => {
  expect(Suit.all).toBe([
    { name: 'Hearts', unicode: '\u{2665}' },
    { name: 'Clubs', unicode: '\u{2663}' },
    { name: 'Diamonds', unicode: '\u{2666}' },
    { name: 'Spades', unicode: '\u{2660}' }
  ]);
});

it('should return a list of the values', () => {
  expect(Value.list).toBe([
    'Joker',
    'Ace',
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    'Jack',
    'Queen',
    'King'
  ]);
});

it('should have a suit', () => {
  expect(peekTopCard().suit.name).toContain(Suit.all); // TODO: FIX!!
});

it('should have a value', () => {
  expect(peekTopCard().value).toContain(Value.list);
});

it('should have a descriptor like `Queen of Diamonds`', () => {
  let testCard = new Card();
  // expect(testCard.descriptor);
});
