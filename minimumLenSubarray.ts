// https://leetcode.com/problems/minimum-size-subarray-sum/?envType=study-plan-v2&envId=top-interview-150
export function minSubArrayLen(target: number, nums: number[]): number {
    let start = 0;
    let end = 0;
    let sum = 0;
    //   let minLength = Infinity;
    const minLengths: number[] = [];
  
    while (end <= nums.length - 1) {
      sum += nums[end];
      end++;
  
      while (sum >= target) {
        minLengths.push(end - start);
        sum -= nums[start];
        start++;
      }
  
    return minLengths.length ? Math.min(...minLengths) : 0;
  }
}