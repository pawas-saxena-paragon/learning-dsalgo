import { maxProfitBruteForce as maxProfit } from "./bestTimeToSellStock";

describe("best time to sell stock", () => {
  it(" prices = [7,1,5,3,6,4]", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toEqual(5);
  });

  it("prices = [7,6,4,3,1]", () => {
    expect(maxProfit([7, 6, 4, 3, 1])).toEqual(0);
  });
});
