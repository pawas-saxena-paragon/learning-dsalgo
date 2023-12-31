// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/?envType=study-plan-v2&envId=top-interview-150
export function findMin(nums: number[]): number {
  let start = 0;
  let end = nums.length - 1;

  if (nums.length === 1) {
    return nums[0];
  }

  /**
   * start < end means that at the end of loop there is at least one element remaining in our [start, end] range.
   * at this point start === end and thats when the loop terminates.
   * At this point be prepared to perform some post processing after the loop. As 1 element has not been checked
   *
   * start <= end means when loop terminates start has become more than end meaning that the pointers have crossed
   * at this stage there is nothing in the [start , end] range
   *
   */
  while (start <= end) {
    // check equality cond
    let mid = Math.floor(start + (end - start) / 2);

    const next = (mid + 1) % nums.length;
    const prev = (mid - 1 + nums.length) % nums.length;
    const isMidMinimum = nums[mid] < nums[prev] && nums[mid] < nums[next];
    if (isMidMinimum) {
      return nums[mid];
    }

    /**
     * here answer will lie in the left half but the more important question is
     * wether mid will be a part of the left half or not. we are sure that mid is not the minimum element at this point
     * [6,7,0,1,2,4,5] consider this arr. Mid is 1 floor(3.5)
     * so this cond is true and we must consider left half
     * should we skip mid ? mid is definitely not the ans so we can skip mid
     * Remember the thumb rule -> if using Math.floor then left = mid will lead to infinite loop
     * Using floor also means that at some point start and mid will become the same.
     * So your condition for deciding start = mid or start = mid+1 shoudl also consider the case
     * when start and mid are the same element.
     */
    const shouldConsiderLeftHalf = nums[mid] < nums[end];

    /**
     * [4,5,6,7,0,1,2] mid = 7 floor(3.5)
     * mid is not the minimum element . this condition is true
     * so considering the right half the answer is still in the range if we skip mid and do start = mid + 1
     */
    const shouldConsiderRightHalf = nums[start] <= nums[mid];
    if (shouldConsiderLeftHalf) {
      end = mid - 1;
    } else if (shouldConsiderRightHalf) {
      start = mid + 1;
    }
  }

  return -1;
}
