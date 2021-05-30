
// Ex:1 simple buy using clousers 
function curry(f){
  return function(a){
    return function(b){
      return f(a,b);
    };
  };
}

let sum = function(a,b){
  return a+b;
}

let currySum = curry(sum);

console.log(currySum(1)(2));


//Ex:2 using bind method
let multiple = function(x,y){
  console.log(x*y);
}

let multipleby2 = multiple.bind(this,3);
multipleby2(2);

let multipleby4 = multiple.bind(this,3);
multipleby4(4);

// Note can also pass above arg as
let multipleby4WithExtra = multiple.bind(this);
multipleby4WithExtra(3,6);

let multipleby4WithExtras = multiple.bind(this, 3, 7);
multipleby4WithExtras(4);
