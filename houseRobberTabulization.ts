const dp: number[] = [];
function rob(nums: number[]): number {
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length - 1; i++) {
        const val = nums[i];
        dp[i+1] = Math.max(dp[i-2] + val, dp[i]);
    }

    return dp[nums.length -1]
};

"".replace