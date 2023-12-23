// https://leetcode.com/problems/longest-increasing-subsequence/?envType=study-plan-v2&envId=top-interview-150

const dp: number[][] = [];
export function lengthOfLIS(nums: number[]): number {
  for (let i = 0; i < nums.length; i++) {
    dp[i] = [];
  }
  return solve(nums, nums.length, -1);
}

function solve(
  nums: number[],
  n: number,
  indexMinElementOfSubsequenceTillNow: number
): number {
  if (n === 0) {
    return 0;
  }

  if (dp[n - 1][indexMinElementOfSubsequenceTillNow] !== undefined) {
    return dp[n - 1][indexMinElementOfSubsequenceTillNow];
  }

  if (
    nums[n - 1] < nums[indexMinElementOfSubsequenceTillNow] ||
    indexMinElementOfSubsequenceTillNow === -1
  ) {
    // take the current element and add it to the subsequence.
    return (dp[n - 1][indexMinElementOfSubsequenceTillNow] = Math.max(
      1 + solve(nums, n - 1, n - 1),
      solve(nums, n - 1, indexMinElementOfSubsequenceTillNow)
    ));
  } else {
    // not taking the nth element as part of the subsequence
    return (dp[n - 1][indexMinElementOfSubsequenceTillNow] = solve(
      nums,
      n - 1,
      indexMinElementOfSubsequenceTillNow
    ));
  }
}
