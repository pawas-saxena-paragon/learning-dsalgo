const dp: number[] = [];
function rob(nums: number[]): number {
    const len = nums.length;
    if(len === 1){
        dp[0] = nums[0];
        return dp[0];
    }
    else if(len === 2){
        dp[1] = Math.max(nums[0], nums[1]); 
        return dp[1];
    }
    else {
        console.log('iteration', nums, dp);
        if(dp[len-1]){
            return dp[len-1];
        }
        const lastEle = nums.pop();
        const numsMinus1Ele = [...nums];
        nums.pop();
        // now nums is numsMinusLast2Ele
        dp[len-1] = Math.max(rob(nums) + lastEle, rob(numsMinus1Ele))
        return dp[len-1];
    }
};

console.log('final',rob([2,7,9,3,1]));