// https://leetcode.com/problems/find-peak-element/description/?envType=study-plan-v2&envId=top-interview-150
// comeback to it later
export function findPeakElement(nums: number[]): number {
  if (nums.length === 1) {
    return nums[0];
  }
  if (nums.length === 2) {
    return Math.max(...nums);
  }

  let start = 0;
  let end = nums.length - 1;

  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);
    
    const prev = mid - 1 > -1 ? nums[mid - 1] : -Infinity;
    const next = mid + 1 < nums.length ? nums[mid + 1] : -Infinity;
    
    console.log('123', 'start', start, 'mid',mid, 'end', end, 'current', nums[mid], 'prev', prev, 'next', next);
    // no loop breakout condition
    if (nums[mid] > prev && nums[mid] > next) {
      return nums[mid];
    }

    //choosing left as both sides have a peak and we can return any of them
    // start will become equal to mid so be careful

    if(nums[mid] > prev && nums[mid] > next){
    }
    
    end = mid + 1;
  }

  return nums[start];
}

/**
 * check mid, prev and next to determine if the peak is at mid .
 * then if peak is not at mid
 * then peak can either be to the right of mid or to the left of mid.
 * both right and left will have peaks if the peak is not present at the mid
 */
