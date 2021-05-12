// Below code is for Blind, Call and Apply

// Exp 1:
// let name ={
//   firstName: "Pranav",
//   lastName: "Manikpure",
//   printFullName: function(){
//     console.log(this.firstName +" "+ this.lastName);
//   }
// }

// name.printFullName();

// let firendName ={
//   firstName: "Avisha",
//   lastName: "Manikpure",
// }

// name.printFullName.call(firendName);


// Exp 2:
// let name ={
//   firstName: "Pranav",
//   lastName: "Manikpure",
// }

// let printFullName = function(){
//   console.log(this.firstName +" "+ this.lastName);
// }

// printFullName.call(name);

// let firendName ={
//   firstName: "Avisha",
//   lastName: "Manikpure",
// }

// printFullName.call(firendName);

// Exp 3:
let name ={
  firstName: "Pranav",
  lastName: "Manikpure",
}

let printFullName = function(homeTown, town){
  console.log(this.firstName +" "+ this.lastName + " " + homeTown + " " + town);
}

 printFullName.call(name,"Wardha", "Pune");
 printFullName.apply(name,["Wardha", "Pune"]);

 let bindMethod = printFullName.bind(name,"Wardha", "Pune");
 bindMethod();