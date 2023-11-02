// kadane's algorithm
// chat gpt code

function findMaxSubarraySum(arr) {
  let maxSum = -Infinity;
  let currentSum = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // The idea is to find the maximum subarray ending at the current element.
    currentSum = Math.max(arr[i], currentSum + arr[i]);
    /* 
    Comparing Subarrays: At each step, the algorithm compares currentSum with maxSum.
    If currentSum becomes greater than maxSum, it means a new subarray with a larger sum has been found. 
    The algorithm updates maxSum accordingly.
    */
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const array = [1, -3, 2, 1, -1];
const maxSubarraySum = findMaxSubarraySum(array);
console.log(maxSubarraySum); // Output: 3 (Subarray [2, 1] has the maximum sum)

/*----------------------------- Iterations--------------------------
[1,-3,2,1,-1]

i = 1
subArrayEndingAtCurrentEle = [1]
currentSum = 1
maxSum = 1

i = -3
subArrayEndingAtCurrentEle = [1, -3]
currentSum = Max(1,-2) = -2  // if currentSum + arr[i] > arr[i] then window is being continued
maxSum = 1

i=2
subArrayEndingAtCurrentEle = [1,-3,2] -> [2]
currentSum = Max(2,-2 + 2) = 2 // if currentSum + arr[i] < arr[i] then window is changed
maxSum = 2

i=1
subArrayEndingAtCurrentEle = [2, 1]
currentSum = Max(1,1 + 2) = 3 // window continued
maxSum = 3

i=-1
subArrayEndingAtCurrentEle = [2, 1, -1]
currentSum = Max(-1,-1 + 3) = 2 
maxSum = 3 // not updated pointing to [2,1]


----------------------------- Iterations--------------------------*/
