
// Portal
// Props composition



// tree -> eert
// // treeiii -> iiieetr
// function xyz(str){
//   let stringLength =  str.length
//   var tempString = {}
//     for(let i = 0; i < stringLength; i++) {
//       let tempWord = str[i];
//      if(tempString[tempWord]) {
//       tempString[tempWord]++;
//      }else {
//       tempString[tempWord] = 1;
//      }
//     }
// }
// xyz("tree");


/*Sort Characters By Frequency
tree -> eert
treeiii -> iiieetr
Longest Common Prefix
Input: strs = ["flower","flow","flight"]
Output: "fl" */

var promise1 =  time => new Promise((resolve, reject)=>setTimeout(()=>{resolve('Pranav')},time))

var promise2 =  time => new Promise((resolve, reject)=>setTimeout(()=>{resolve('Pranav')},time))

var promise3 =  time => new Promise((resolve, reject)=>setTimeout(()=>{resolve('Pranav')},time))


let parallelPromise = Promise.all([promise1(5000), promise2(1000), promise3(1000)]).then(()=>{
    console.log("P1");
    console.log("P2");
    console.log("P3");
})


// parallelPromise(1000).then((text)=>{
//   console.log("Promise",text)
// }).catch((error)=>{
//   console.log("catch",error);
// })

