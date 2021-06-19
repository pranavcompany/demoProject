// function tac(){
//  const x = 6 % 2;
//  const y = x ? "pranav" : "swati";
//  console.log(y);
// }
// tac(10)
// tac(10)

// console.log([3] == [3]);
// let user = { name: "John", years: 30 };
// const {name,year:age,isAdmin=false} = user

// console.log(name)
// console.log(age)
// console.log(isAdmin)


// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250
// };


// function maxSalarie(salaries){
// 	if (salaries == null){
// 		return null
// 	}
//   let maxSalary = 0;
//   let maxName = null;
//   console.log("I am here",salaries);
// 	for(const {name,salary} in salaries){
//     console.log("Nname",name);
//     console.log("salary",salary);
// 			if( salary > maxSalary ) {
//         console.log("Nname",name);
// 				maxSalary = salary
// 				maxName = name
// 			}
// 	}
// 	return maxName
// }

// console.log(maxSalarie(salaries));


//Ex:1
//Input - [6,7,4,2,1,1,5,9]
//output - [4,2,1,1]

// function finalArray(array,number){
//   let finalArray = [];
//   let tempElement = 0
// 	for(let i = 0; i < array.length; i++) {
// 	  for(let j = i+1; j < array.length; j++) {
//     if (finalArray.length === 0) {
//       tempElement = array[i] + array[j] 
//     }else {
//       tempElement = finalArray.reduce((total,value)=>  total + value)
//     } 

// 		if (tempElement === number) {
// 			return finalArray.length === 0 ? [array[i], array[j]] : finalArray
// 		} else if(tempElement > number){
// 			break
// 		}else if(tempElement < number){
// 		   tempElement = tempElement + array[i]
// 		   finalArray.push(array[i])
//        break
// 		}
// 	 }
//   }
// 	return []
// }

// console.log(finalArray([6,7,4,2,1,1,5,9],8));


//Ex:2
//		6    3    1
//		9    7    8
//		2    4    5 
// Find min in row and max in column from the matrix





// Ex:3
//
// const arr1 = [1,2,3,4,[1,2,3,[1,2,3,[1,2,3]]]]
// console.log(arr1.flat(4))


// Ex:4
// bubble
// var a = [4,1,5,6,2,3]
// function sort(a){
// 	for(var i = 0 ; i < a.length; i++){
// 		for(var j = 0 ; j < (a.length-i-1); j++){
// 			if(a[j] > a[j+1]){
// 				var temp = a[j];
// 			   a[j] = a[j+1];
// 				 a[j+1] = temp
// 			}
// 	  }
// 	}
// 	return a;
// }

// console.log(sort(a))

// Inseration Sort
// var a1 = [4,1,5,6,2,3]
// function inserationSort(a){
// 	for (var i = 0; i<a.length;i++){
// 		var index = i;
// 		while(index > 0 && a[index-1] >= a[index]){
// 			const temp  = a[index -1];
// 			a[index-1] = a[index];
// 			a[index] = temp;
// 			index = index -1
// 		}
// 	}
// 	return a
// }

// console.log(inserationSort(a1))





// let p1 = (delay)=> new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		reject("pranav")
// 	},delay)
// }).then((text)=>{
// 	console.log("Resolve",text)
// }).catch((error) => {
// 	console.log("reject",error)
// })

// let p2 = (delay)=> new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		reject("pranav")
// 	},delay)
// }).then((text)=>{
// 	console.log("Resolve",text)
// }).catch((error) => {
// 	console.log("reject",error)
// })

// let p3 = (delay)=> new Promise((resolve,reject)=>{
// 	setTimeout(()=>{
// 		reject("pranav")
// 	},delay)
// }).then((text)=>{
// 	console.log("Resolve",text)
// }).catch((error) => {
// 	console.log("reject",error)
// })

// Promise.all([p1(100),p3(100),p2(100)]).then(([p1,p2,p3])=>{
// 	console.log("All promise resolve");
// }).catch((error)=>{
// 	console.log("All promise reject");
// })

// function nextOrder(){
// 	console.log("Pranav")
// 	console.log("Pranav1")
// }

// function *genrator1(){
// 	yield i = 0
// 	yield nextOrder()
// 	yield i = i + 1
// 	yield i = i + 5 
// }
// let gen1 = genrator1()
// console.log(gen1.next())
// console.log(gen1.next())
// console.log(gen1.next())
// console.log(gen1.next())


function swap(arr,x,y){
	var temp = arr[x];
	arr[x] = arr[y]
	arr[y] =  temp
}

function selectionSort(arr){
	var n = arr.length
	for(var i = 0 ;i < n;i++){
		var minIndex = i;
		for(var j = i+1; j< n;j++){
			if(arr[j] < arr[minIndex] ){
				minIndex = j;
			}
		}
		swap(arr,minIndex,i)
	}
	return arr
}
var arr = [64, 25, 12, 22,11];
console.log(selectionSort(arr))