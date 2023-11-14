// https://leetcode.com/problems/search-insert-position/
export function searchInsert(nums: number[], target: number): number {
  let start = 0;
  let end = nums.length - 1;
  let mid;

  while (start < end) {
    console.log("log", start, end);
    mid = Math.floor((start + end) / 2);
    // check for overflow ,
    // check wether to use upper mid or lower mid

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else {
      end = mid;
    }
  }

  if (nums[start] === target) {
    return start;
  } else if (nums[start] > target) {
    return Math.max(start, 0);
  } else {
    return start + 1;
  }
}
