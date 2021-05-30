
// Ex:1
function add(x, y) {
  return x + y;
}

console.log(add(1, 2, 3, 4, 5)); 

// Ex:2 using Reset operator
function add1(...arg) {
  let sum = 0;
  for (let a of arg) sum += a
  return sum
}

console.log(add1(1, 2, 3, 4, 5)); 


// reset operator parameter should be on last arguments 
// below code will give error
// function abc(a, ...b, c) {
//   return;
// }

// Ex:3 using Reset operator with mulitple arguments
function xyz(x, y, ...z) {
  console.log(x, ' ', y); // hey hello
  console.log(z); // ["wassup", "goodmorning", "hi", "howdy"]
  console.log(z[0]); // wassup
  console.log(z.length); // 4
}

xyz("hey", "hello", "wassup", "goodmorning", "hi", "howdy")


// Basic ex1: Spread operator
const arr = ["Joy", "Wangari", "Warugu"];
// element at last
const newArr = ["joykare", ...arr];
// element at first
const myNames = [...arr, "joykare"];
console.log(newArr)