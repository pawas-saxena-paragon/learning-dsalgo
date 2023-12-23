// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// https://www.youtube.com/watch?v=zr_AoTxzn0Y&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=6
export function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }
  if (nums.length === 1) {
    return nums[0] === target ? [0, 0] : [-1, -1];
  }

  const result: number[] = [];
  let start = 0;
  let end = nums.length - 1;
  let foundPos: number;

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      foundPos = mid;
      break;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else if (nums[mid] < target) {
      start = mid + 1;
    }
  }

  if (foundPos === undefined) {
    return [-1, -1];
  }

  let i = foundPos;
  while (nums[i] === target) {
    i++;
  }
  result[1] = i - 1;

  i = foundPos;
  while (nums[i] === target) {
    i--;
  }
  result[0] = i + 1;

  return result;
}

/**
 * find first occurence. Keep moving forward until the number changes
 *
 *
 * considering when start and end point to the same element to be invalid cond.
 */
