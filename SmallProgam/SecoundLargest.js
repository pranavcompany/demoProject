  // Complete the function
 function getSecondLargest(nums) {
    let largest = nums[0];
    let secondLargest = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) {
            secondLargest = largest;
            largest = nums[i];
            continue;
        }
        
        if ((nums[i] > secondLargest) && (nums[i] < largest)) {
            secondLargest = nums[i];
        }
    }
    
    return secondLargest;
}
console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]));