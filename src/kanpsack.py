class Solution:
    # Function to return max value that can be put in knapsack of capacity W.
    dp = []

    def knapSack(self, W, wt, val, n):
        for i in range(0, W):
            self.dp.append([])
            for j in range(0, n):
                self.dp[i].append(None)
        return self.solve(W, wt, val, n)

    def solve(self, W, wt, val, n):
        if W == 0 or n == 0:
            return 0

        if self.dp[W - 1][n - 1] != None:
            return self.dp[W - 1][n - 1]

        if wt[n - 1] <= W:
            self.dp[W - 1][n - 1] = max(
                val[n - 1] + self.knapSack(W - wt[n - 1], wt, val, n - 1),
                self.knapSack(W, wt, val, n - 1),
            )
            return self.dp[W - 1][n - 1]
        else:
            self.dp[W - 1][n - 1] = self.knapSack(W, wt, val, n - 1)
            return self.dp[W - 1][n - 1]
