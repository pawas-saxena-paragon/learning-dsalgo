/**
 *
 * @param cost https://leetcode.com/problems/minimum-cost-of-buying-candies-with-discount/
 */
function minimumCost(cost: number[]): number {
  cost.sort((a, b) => b - a);
  let finalCost = 0;
  for (let i = 0; i < cost.length; i += 3) {
    const nextElement = cost[i + 1];
    finalCost = finalCost + cost[i] + (nextElement ? cost[i + 1] : 0);
    console.log(cost[i], cost[i + 1], "free", cost[i + 2], finalCost);
    //skipping the 3rd element as it is for free.
  }
  return finalCost;
}

console.log(minimumCost([6, 5, 7, 9, 2, 2]));
