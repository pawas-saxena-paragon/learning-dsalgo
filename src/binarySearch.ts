// https://leetcode.com/problems/search-insert-position/?envType=study-plan-v2&envId=top-interview-150
function searchInsert(nums: number[], target: number): number {
  const midIndex = Math.floor(nums.length / 2);
  const midEle = nums[midIndex];
  if (target === midEle) {
    return midIndex;
  } else if (nums.length === 1 || nums.length === 0) {
    return midIndex;
  } else {
    const firstHalf = nums.slice(0, midIndex);
    const secondHalf = nums.slice(midIndex + 1);
    const resultFirstHalf = searchInsert(firstHalf, target);
    if (resultFirstHalf === -1) {
      const resultSecondHalf = searchInsert(secondHalf, target);
      return resultSecondHalf;
    } else {
      return resultFirstHalf;
    }
  }
}
function searchInsert1(nums: number[], target: number): number {
  const midIndex = Math.floor(nums.length / 2);
  const midEle = nums[midIndex];
  if (target === midEle) {
    return midIndex;
  } else if (nums.length === 0) {
    return -1;
  } else if (midEle < target) {
    const firstHalf = nums.slice(0, midIndex);
    return searchInsert1(firstHalf, target);
  } else {
    const secondHalf = nums.slice(midIndex + 1);
    return searchInsert1(secondHalf, target);
  }
}

console.log(searchInsert1([1, 3, 5, 6], 3));
