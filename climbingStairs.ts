function climbStairs(n: number): number {
    const dp: number[] = [];
    dp[0] = 0;
    dp[1] = 1;
    dp[2] = 2;

    // return memoization(n);
    return tabulation(n);

    function memoization(n: number): number {
        //top down
        if (dp[n]) {
            return dp[n];
        }
        else {
            // base case is handled in the initalization of dp array.
            dp[n] = memoization(n - 1) + memoization(n - 2);
            return dp[n];
        }
    }

    function tabulation(n: number): number {
        if (dp[n]) {
            return dp[n];
        }
        for (let i = 3; i <= n; i++) {
            dp[i] = dp[i - 1] + dp[i - 2];
        }
        return dp[n];
    }
}