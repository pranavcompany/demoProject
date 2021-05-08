// simple example
function x(){
    var a=8;
    function y(){
        console.log(a);
    }
    y();
}
x();


// We can also return function as clousers
// Ex 1:
function x1(){
    var a=8;
    function y1(){
        console.log(a);
    }
    return y1;
}
var z = x1();
// console.log(z());
// console.log(x1()());

// Ex 2:
function x2(){
    var a=8;
    return function y2(){
        console.log(a);
    }
}
var z1 = x2();
console.log(z1());

// Ex 3:
function x3(){
    var a = 8;
    function y(){
        console.log(a);
    }
    var a = 100;
    return y;
}
var z2 = x3();
console.log(z2());

// Ex 4:
function z3(){
    var b = 100;
    function y(){
        var a = 8;
        function x(){
          console.log(a,b);
        }
        x();
    }
    y();
}
console.log(z3());

// Ex 5:
function z4(){
    var i = 1;
    setTimeout(function() {
        console.log(i);
    },2000);
    console.log('I am here');
}
console.log(z4());

// Ex 5:
function z5(){
    for(var i =0;i<=5;i++){
        setTimeout(function() {
                console.log(i);
        }, i*1000);
    }
  console.log('I am here');
}
console.log(z5());

// Ex 6:
function z6(){
    setTimeout(function() {
        for(var i =0;i<=5;i++){
            console.log(i);
        }
    }, 1000); 
  console.log('I am here');
}
console.log(z6());

// Ex 7:
function z7(){
    for(let i =0;i<=5;i++){
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
  console.log('I am here');
}
console.log(z7());

// Ex 8:
function z8(){
    for(var i =0;i<=5;i++){
        setTimeout(function() {
            console.log(i);
        }, i*1000);
    }
  console.log('I am here');
}
console.log(z8());

// Ex 9:
function z9(){
    for(var i =0;i<=5;i++){
        function close(i){
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }
       close(i);
    }
  console.log('I am here');
}
console.log(z9());