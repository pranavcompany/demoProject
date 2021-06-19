//Prototypal Inheritance
let Person = function(firstName){
 this.firstName = firstName;
}

let Student = function(firstName, courseCount){
  this.firstName = firstName;
  this.courseCount =  courseCount;
  this.getCourseCount = function(){
    console.log(`Course Count is: ${this.courseCount}`);
  }
 }

Person.prototype.getFirstName = function(){
  return `User name is ${this.firstName}`;
}


Object.assign(Student.prototype,Person.prototype)
// Student.prototype = Object.assign({},Student.prototype,Person.prototype) // best way
// Student.prototype = {...Student.prototype, ...Person.prototype} 

// override the method of students prototype
// Student.prototype = Person.prototype

let pranav = new Student("Pranav",4);
pranav.getCourseCount();
console.log(pranav.getFirstName());


