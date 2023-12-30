export function search(nums: number[], target: number): number {
  const rotationPivot: number = getRotationPivot(nums);

  if (rotationPivot === -1) {
    return binarySearch(nums, target, 0, nums.length);
  }

  const searchInFirstHalf = binarySearch(nums, target, 0, rotationPivot - 1);
  const searchSecondHalf = binarySearch(
    nums,
    target,
    rotationPivot,
    nums.length - 1
  );

  // at least one of them is -1 . If element is not found both are -1
  return Math.max(searchInFirstHalf, searchSecondHalf);
}

/**
 * returns index where rotation has stopped and first index of normal array begins .
 * the value is never zero
 */
export function getRotationPivot(nums: number[]): number {
  let prev = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < prev) {
      return i;
    }
    prev = nums[i];
  }

  return -1;
}

export function binarySearch(
  nums: number[],
  target: number,
  start: number,
  end: number
): number {
  while (start <= end) {
    // revisit this cond
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}
