// https://leetcode.com/problems/coin-change/?envType=study-plan-v2&envId=top-interview-150

function coinChange(coins: number[], amount: number): number {
  const dp = {};
  function recurse(coins: number[], amount: number): number{
    if (amount <= 0) {
      console.log("termination by 0", 0);
      return 0;
    }
  
    // during different coin selection we will be computing for the same amount again so this can be used.
    if (dp[amount] !== undefined) {
      return dp[amount];
    }
  
    let minCoins = Infinity;
  
    for (let coin of coins) {
      if (coin <= amount) {
        console.log("computing for", amount);
        // selecting coin but we are not going to reduce the coins array because we have infinite number of each coin
        const resOnSelectingCoin = 1 + recurse(coins, amount - coin);
  
        if (resOnSelectingCoin < minCoins) {
          minCoins = resOnSelectingCoin;
        }
      }
      // not need to recurse in else case
    }
    // array is over so we have results of using all coin
  
    if (dp[amount] === undefined) {
      dp[amount] = minCoins;
    }
    return minCoins;
  }
  const minCoins = recurse(coins, amount);
  return minCoins === Infinity ? -1 : minCoins;
}




// console.log(coinChange([1, 2, 5], 11));
// console.log(coinChange([1, 2147483647], 2));
console.log(coinChange([186, 419, 83, 408], 6249));
// console.log(coinChange([2], 3));
