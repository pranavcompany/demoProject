var arr = [64, 25, 12, 22,11];

function swap(arr,x,y){
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
}

// function selectionSort(arr){
//   let n = arr.length;
//   for(var i = 0 ; i < n; i++){
//      var min_index = i;
//     for(var j = i + 1 ; j < n ; j++){
//       if(arr[j] < arr[min_index]){
//         min_index = j;
//       }
//     }
//     swap(arr,min_index,i);
//   }
//   return arr;
// }

// console.log(selectionSort(arr))



function bubleSort(arr){
  for( var i = 0 ;i< arr.length-1;i++){
    for (var j =0; j< arr.length -1;j++){
      if(arr[j] > arr[j+1]){
        swap(arr,j,j+1)
      }
    }
  }
  return arr
}

console.log(bubleSort(arr))
