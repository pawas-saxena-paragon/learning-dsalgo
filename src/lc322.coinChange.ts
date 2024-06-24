// https://leetcode.com/problems/coin-change/?envType=study-plan-v2&envId=top-interview-150

export function coinChange(coins: number[], amount: number): number {
  // dp = [];
  // return dp;
  const result = getMinCoins(coins, amount);
  return result === 0 ? -1 : result;
}

function getMinCoins(coins: number[], amount: number): number {
  if (coins.length === 0 || amount < 0) {
    return 0;
  }

  const [firstCoin] = coins;

  if (canUseCoin(firstCoin, amount)) {
    return 1 + getMinCoins(coins, amount - firstCoin);
  } else {
    coins.shift();
    return getMinCoins(coins, amount);
  }
}

function canUseCoin(coin: number, amount: number): boolean {
  if (amount < coin) {
    return false;
  }

  return amount % coin === 0;
}
