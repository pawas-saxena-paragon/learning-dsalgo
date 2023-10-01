// https://practice.geeksforgeeks.org/problems/subset-sum-problem-1611555638/1?utm_source=gfg&utm_medium=article&utm_campaign=bottom_sticky_on_article
class Solution {
  dp = [];
  table = [];
  isSubsetSum(arr, n, sum) {
    //returns boolean
    const initalInnerArr = Array(sum + 1).fill(undefined);
    this.dp = Array(n + 1).fill([...initalInnerArr]);
    this.table = [...this.dp];
    return this.solveTopDown(arr, n, sum);
  }

  // n is the numbers to consider in this problem
  solve(arr, n, sum) {
    //returns boolean
    if (sum === 0) {
      return true;
    } else if (n === 0) {
      return false;
    }

    if (this.dp[n][sum] !== undefined) {
      return this.dp[n][sum];
    } else {
      if (arr[n - 1] > sum) {
        return (this.dp[n][sum] = this.solve(arr, n - 1, sum));
      } else {
        const canSolveByTakingLastEle = this.solve(
          arr,
          n - 1,
          sum - arr[n - 1]
        );
        return (this.dp[n][sum] = canSolveByTakingLastEle
          ? canSolveByTakingLastEle
          : this.solve(arr, n - 1, sum));
      }
    }
  }

  solveTopDown(arr, n, sum) {
    //initalization
    for (let i = 0; i < n + 1; i++) {
      for (let j = 0; j < sum + 1; j++) {
        if (j === 0) {
          this.table[i][j] = true;
        } else if (i === 0) {
          this.table[i][j] = false;
        }
      }
    }

    console.log(this.table);

    //solving the problem
    for (let i = 1; i < n + 1; i++) {
      for (let j = 1; j < sum + 1; j++) {
        // sum for this sub problem is less than the latest element in the array for which selection is being performed
        if (j < arr[i - 1]) {
          this.table[i][j] = this.table[i - 1][j];
        } else {
          const canSolveByTakingLastEle = this.table[i - 1][j - arr[i - 1]];
          this.table[i][j] = canSolveByTakingLastEle || this.table[i - 1][j];
        }
      }
    }

    return this.table[n][sum];
  }
}

export default Solution;
