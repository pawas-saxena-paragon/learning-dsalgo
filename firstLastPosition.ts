// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// https://www.youtube.com/watch?v=zr_AoTxzn0Y&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=6
export function searchRange(nums: number[], target: number): number[] {
  if (nums.length === 0) {
    return [-1, -1];
  }

  let start = 0;
  let end = nums.length - 1;
  const positions = [];

  while (start <= end) {
    console.log("start", start, "end", end);
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      positions.push(mid); // can remove this push
      // move to left untill element is different than mid
      let i = mid;
      while (nums[i] === target) {
        positions.push(i);
        i--;
      }
      // move to right until elemnet is different than mid
      i = mid;
      while (nums[i] === target) {
        positions.push(i);
        i++;
      }
      break;
    } else if (nums[mid] < target) {
      // choose right arr
      start = mid + 1;
    } else if (nums[mid] > target) {
      // choose left arr
      end = mid - 1;
    }
  }

  return positions.length
    ? [Math.min(...positions), Math.max(...positions)]
    : [-1, -1];
}
