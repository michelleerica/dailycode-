// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].


let finder = function(arr,target){
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length; j++) {
      let total = arr[i] + arr[j];
        if (target === total)
          return `[${i}, ${j}]`
    }
  }
}

console.log(finder([2, 7, 11, 15], 9));
