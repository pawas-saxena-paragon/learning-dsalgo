// https://leetcode.com/problems/longest-increasing-subsequence/?envType=study-plan-v2&envId=top-interview-150

// const dp: number[][] = [];
export function lengthOfLIS(nums: number[]): number {
  // for (let i = 0; i < nums.length; i++) {
  //   dp[i] = [];
  // }
  return solve(nums, nums.length, Infinity);
}

function solve(
  nums: number[],
  n: number,
  minElementOfSubsequenceTillNow: number
): number {
  if (n === 0) {
    return 0;
  }

  if (nums[n - 1] < minElementOfSubsequenceTillNow) {
    // take the current element and add it to the subsequence.
    return Math.max(
      1 + solve(nums, n - 1, nums[n - 1]),
      solve(nums, n - 1, minElementOfSubsequenceTillNow)
    );
  } else {
    // not taking the nth element as part of the subsequence
    return solve(nums, n - 1, minElementOfSubsequenceTillNow);
  }
}
