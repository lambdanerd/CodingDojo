const cat1 = {
  name: 'Cuddles',
  favoriteFood: 'Spaghetti',
  age: 3,
  sleepingSpots: ['under the bed', 'in a sunbeam']
};

const cat2 = {
  name: 'Bubbles',
  favoriteFood: 'Bread',
  age: 4,
  sleepingSpots: ['under the bed', 'in a cabinet']
};

const cat3 = {
  name: 'Jason Voorees',
  favoriteFood: 'Grubs',
  age: 13,
  sleepingSpots: ['bottom of Crystal Lake']
};

const cat4 = {
  name: 'Scott Aukerman',
  favoriteFood: 'Babies',
  age: 3,
  sleepingSpots: [
    'under the bed',
    'in a sunbeam',
    'in a cabinet',
    'down by the bay'
  ]
};

const errorCat = {
  name: 'meow',
  favoriteFood: 'meow',
  age: -1,
  sleepingSpots: ['the void']
};

const cats = [errorCat, cat1, cat2, cat3, cat4];

function getCatInfo(catId) {
  let cat = cats[catId];
  return cat;
}

module.exports = getCatInfo;
