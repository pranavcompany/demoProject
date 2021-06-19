const a ={ name:"Pranav",b: {name:"Arun",c:{ name:"Deepak",d:"abc"}}}
const aa = a // shallow copy

console.log(aa)
console.log(a)
console.log(aa === a)
console.log(aa.b === a.b)
console.log(aa)
console.log(a)

const aaa = {
  ...a,
  b:{
    ...a.b,
    c:{
      ...a.b.c
    }
  }
}  // Deep clone or use loadash or itrate it for dyanmic


console.log(aa.b.c === aaa.b.c)