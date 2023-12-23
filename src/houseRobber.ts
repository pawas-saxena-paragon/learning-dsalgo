// https://leetcode.com/problems/house-robber/?envType=study-plan-v2&envId=top-interview-150

let dp: number[];
export function rob(nums: number[]): number {
  dp = Array(nums.length).fill(undefined);
  return solve(nums, nums.length);
}

/**
 *
 * @param nums
 * @param n is the
 */
function solve(nums: number[], n: number): number {
  if (n === 0) {
    return 0;
  }
  if (n === 1) {
    return nums[0];
  }
  // if only 2 elements are present
  if (n === 2) {
    return Math.max(nums[n - 1], nums[n - 2]);
  }

  if (dp[n] !== undefined) {
    return dp[n];
  }

  // choose n (last element)
  const lootChooseLastEle: number = nums[n - 1] + solve(nums, n - 2);

  // not choose n (last elemnt)
  const lootChooseSecondLastEle: number = nums[n - 2] + solve(nums, n - 3);
  const lootNotChooseSecondLastEle: number = solve(nums, n - 2);

  return (dp[n] = Math.max(
    lootChooseLastEle,
    lootChooseSecondLastEle,
    lootNotChooseSecondLastEle
  ));
}
