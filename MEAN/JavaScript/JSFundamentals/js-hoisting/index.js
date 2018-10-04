// I guess I misunderstood the part of the assignment where I'm supposed to
// rewrite the code in the was the interpreter sees it. It'll just see it line
// by line though, amirite? 🤷

console.log(hello);
var hello = 'world';
// Prediction:
// => undefined
// Actual:
// => undefined

var needle = 'haystack';
test();
function test() {
  var needle = 'magnet';
  console.log(needle);
}
// Prediction:
// => magnet
// Actual:
// => magnet

var brendan = 'super cool';
function print() {
  brendan = 'only okay';
  console.log(brendan);
}
console.log(brendan);
// Prediction:
// => super cool
// Actual:
// => super cool

var food = 'chicken';
console.log(food);
eat();
function eat() {
  food = 'half-chicken';
  console.log(food);
  var food = 'gone';
}
// Prediction:
// => chicken, half-chicken
// Actual:
// => chicken, half-chicken

// mean();
// console.log(food);
// var mean = function() {
//   food = 'chicken';
//   console.log(food);
//   var food = 'fish';
//   console.log(food);
// };
// console.log(food);
// Prediction:
// => mean is not a function
// Actual:
// => mean is not a function

console.log(genre);
var genre = 'disco';
rewind();
function rewind() {
  genre = 'rock';
  console.log(genre);
  var genre = 'r&b';
  console.log(genre);
}
console.log(genre);
// Prediction:
// => undefined, rock, r&b, disco
// Actual:
// => undefined, rock, r&b, disco

dojo = 'san jose';
console.log(dojo);
learn();
function learn() {
  dojo = 'seattle';
  console.log(dojo);
  var dojo = 'burbank';
  console.log(dojo);
}
console.log(dojo);
// Prediction:
// => san jose, seattle, burbank, san jose
// Actual:
// => san jose, seattle, burbank, san jose

console.log(makeDojo('Chicago', 65));
console.log(makeDojo('Berkeley', 0));
function makeDojo(name, students) {
  const dojo = {};
  dojo.name = name;
  dojo.students = students;
  if (dojo.students > 50) {
    dojo.hiring = true;
  } else if (dojo.students <= 0) {
    dojo = 'closed for now';
  }
  return dojo;
}
// Prediction:
// => { name: 'Chicago', students: 65, hiring: true }, error on `dojo = 'closed for now';
// Actual:
// => { name: 'Chicago', students: 65, hiring: true }
//    /Users/lambdanerd/Workshop/CodingDojo/MEAN/JavaScript/JSFundamentals/js-hoisting/index.js:96
//        dojo = 'closed for now';
//
//    TypeError: Assignment to constant variable.
