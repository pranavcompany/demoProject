var arr = [11,12,22,54,60];

function BST(arr,number, startIndex, endIndex){
  if(startIndex < endIndex) {
    var midIndex = Math.floor((endIndex - startIndex)/2);
    if (arr[midIndex] == number)
    return arr[midIndex]; 
  
    if(arr[midIndex] > number){
      BST(arr,number, startIndex, midIndex - 1)
    }else {
      BST(arr,number, midIndex + 1, endIndex)
    }
  }else {
    return "No Match found"
  }
}


var startIndex = 0;
var endIndex = arr.length;
console.log(BST(arr, 22, startIndex, endIndex))


