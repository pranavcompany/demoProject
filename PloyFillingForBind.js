const name = {
  firstName: 'Pranav',
  lastName: 'Manikpure'
}

let getFullName = function(homeTown, state){
 console.log(this.firstName + " " + this.lastName + " " + homeTown + " " + state);
}

let printMyName = getFullName.bind(name,"Wardha");

printMyName("MH");


Function.prototype.mybind = function(...args) {
  let obj = this,
  params = args.slice(1);
  return function(...args2){
    obj.apply(args[0],[...params,...args2]);
  }
}

let printMyName2 = getFullName.mybind(name, "Wardha");
printMyName2("MH");