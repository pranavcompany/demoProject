// Ex:1 Fetch function
const promise1 = time => new Promise((resolve, reject) => setTimeout(()=>resolve("Resolved1"), time));
// promise1(3000).then((text) => console.log(`${text}, Hello!`)); // 'Hello!'

const promise2 = time => new Promise((resolve, reject) => setTimeout(()=> reject("Rejected2") , time));
// promise2(3000).catch((text) => console.log(`${text}, Hello!`));

const promise3 = time => new Promise((resolve, reject) => setTimeout(()=> resolve("Rejected3"), time));
promise3(1000)
.then(()=>{console.log("1")})
.then(()=>{console.log("2")})
.catch(()=>{console.log("catch")})
.catch(()=>{console.log("catch2")})
.then(()=>{console.log("3")})
console.time("Pranav")
promise1(1000).then(()=>{ return promise2(1000)}).then(()=> {return promise3(1000) }).then(()=>{console.timeEnd("Pranav")})

console.time("Pranav1")
// for parallel execution
Promise.all([promise1(3000),promise2(1000),promise3(500)]).then(([p1,p2,p3])=>{
  console.log(p1)
  console.log(p2)
  console.log(p3)
  console.timeEnd("Pranav1")
}).catch(()=>{
  console.log("Catch")
  console.timeEnd("Pranav1")
})

