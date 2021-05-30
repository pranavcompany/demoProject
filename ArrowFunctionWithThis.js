// Ex:1 without Arrow function
function sum(x, y) {
  return x + y;
}
console.log(sum(10,20));

// Ex2: With Arrow Function
const sum1 = (x, y) => x + y;
console.log(sum1(1,2));


// Ex3: Arrow Funtion with gobal context
// here "this" represent windows object
function test() {
  console.log(this);
}
// give windows object
// console.log(test());


// Ex4: Without Arrow Function this Keyword
// here "this" represent the parent object
const parent = {
  mom_name: "Jayashree Manikpure",
  mother: function () {
      return `${this.mom_name} is my mother`;
  },
};
console.log(parent.mother());


// Ex4: With Arrow Function this Keyword
// Reason:- 
// this in regular function always refers to the context of the function being called. 
// However, in the arrow function, this has nothing to do with the caller of the function.
// It refers to the scope where the function (the enclosing context) is present. That’s why we get undefined.
const parent1 = {
  mom_name: "Samantha Quinn",
  mother: () => {
    return `${this.mom_name} is my mother.`;
  },
};
// get undefine
console.log(parent1.mother());

// Best example

  let obj = {
  // add property
  fistname:'Pranav',
  lastName:'Manikpure',
  // add method
  getfullName: function () {
    // print after 3 seconds
      console.log("inside getfullName", this.fistname + " "+ this.lastName);
      console.log(this);
  },

  getfullNameArrow:() => {
      console.log("inside getfullNameArrow", this.fistname + " " +this.lastName);
      // Windows object
      console.log(this);
  },
  getfullNameWithBind: function () {
    // print after 3 seconds
      console.log("inside getfullNameWithBind", this.fistname + " "+ this.lastName);
      console.log(this);
  }.bind(this),
};
obj.getfullName();
obj.getfullNameArrow();
obj.getfullNameWithBind();