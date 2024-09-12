// https://leetcode.com/problems/longest-consecutive-sequence/description/?envType=study-plan-v2&envId=top-interview-150

function longestConsecutive(nums: number[]): number {
  const mySet = new Set(nums);

  let maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    let maxLengthCurrent = 1;
    let currentNum = nums[i];
    while (mySet.has(currentNum + 1)) {
      currentNum++;
      maxLengthCurrent++;
    }
    currentNum = nums[i];
    while (mySet.has(currentNum - 1)) {
      currentNum--;
      maxLengthCurrent++;
    }

    maxLength = Math.max(maxLength, maxLengthCurrent);
  }

  return maxLength;
}
