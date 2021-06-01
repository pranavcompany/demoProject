// function * generatorFunction() { // Line 1
//   console.log('This will be executed first.');
//   yield 'Hello, ';   // Line 2
//   console.log('I will be printed after the pause');  
//   yield 'World!';
// }
// const generatorObject = generatorFunction(); // Line 3
// console.log(generatorObject.next().value); // Line 4
// console.log(generatorObject.next().value); // Line 5
// console.log(generatorObject.next().value); // Line 6


// using ... oprators
// console.log(...generatorFunction());

function* add() {
  const num = yield; 
  yield 1 + num;
  yield 2 + num;
}
var genrator = add();
console.log(genrator.next());
console.log(genrator.next(2));
console.log(genrator.next());
console.log(genrator.next());


//genrator inside another genrator
function* outer() {
  yield 1; 
  yield* inner();
  yield 2;
}

function* inner(){
  yield "a"; 
  yield "b";
}

var genrator1 = outer();
console.log(genrator1.next());
console.log(genrator1.next());
console.log(genrator1.next());
console.log(genrator1.next());
console.log(genrator1.next());

// console.log(...outer());
