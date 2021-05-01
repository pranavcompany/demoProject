const factorial = n => (n === 0 ? 1 : n * factorial(n - 1));

console.log(factorial(3));

function factorial1(n){
  var number = 1;
  if (n === 1 || n === 0){
    return number
  } else{
    for(let i = n ; i>1; i--){
      number = number * i;
    }
    return number;
  } 
}

console.log(factorial1(3));