// function tac(){
//  const x = 6 % 2;
//  const y = x ? "pranav" : "swati";
//  console.log(y);
// }
// tac(10)
// tac(10)

// console.log([3] == [3]);


///

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

function finalArray(array,number){
  let finalArray = [];
  let tempElement = 0
	for(let i = 0; i < array.length; i++) {
	  for(let j = i+1; j < array.length; j++) {
    if (finalArray.length === 0) {
      tempElement = array[i] + array[j] 
    }else {
      tempElement = finalArray.reduce((total,value)=>  total + value)
    } 

		if (tempElement === number) {
			return finalArray.length === 0 ? [array[i], array[j]] : finalArray
		} else if(tempElement > number){
			break
		}else if(tempElement < number){
		   tempElement = tempElement + array[i]
		   finalArray.push(array[i])
       break
		}
	 }
  }
	return []
}

console.log(finalArray([6,7,4,2,1,1,5,9],8));
