// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/?envType=study-plan-v2&envId=top-interview-150
// https://youtu.be/1pkOgXD63yU
export function maxProfitBruteForce(prices: number[]): number {
    const profits = [];
  
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        profits.push(prices[j] - prices[i]);
      }
    }
  
    const maxProfit = Math.max(...profits);
    return maxProfit < 0 ? 0 : maxProfit;
  }
  
  export function maxProfit(prices: number[]): number {
    let buyPtr = 0;
    let sellPtr = 1;
    let maxProfit = 0;
    let currentDiff = 0;
  
    while (sellPtr < prices.length) {
      currentDiff = prices[sellPtr] - prices[buyPtr];
  
      if (prices[buyPtr] > prices[sellPtr]) {
        buyPtr = sellPtr;
      } else {
        maxProfit = Math.max(maxProfit, currentDiff);
        sellPtr++;
      }
    }
  
    return maxProfit;
  }