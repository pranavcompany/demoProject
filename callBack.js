let x = function(){
    console.log("I am called from inside a function");
}

let y = function(callback){
    console.log('do something');
    callback();
}
y(x);



// without Call back:
let calc1 = function(num1,num2, calcType) {
    if(calcType == 'Add') {
        return num1 + num2;
    }else if(calcType == 'multiply'){
        return num1 * num2;
    }
};

console.log(calc1(2,3,'Add'));

//With CallBack:
let add= function(num1, num2){
    return num1 + num2; 
}
let multply = function(num1,num2){
    return num1 * num2;
}
let calc = function(num1,num2,callback){
    // safe gaurd 
    if(typeof callback === "function"){
        return callback(num1,num2);
    }   
}

console.log(calc(1,2,add));


// We can also wirte as below:-
console.log(calc(10,20,function(a,b){return a-b}))



