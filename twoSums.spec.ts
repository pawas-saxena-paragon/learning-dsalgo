import { twoSum } from "./twoSums";

describe("two sum", () => {
  it("[1,2,3,4,5],9", () => {
    expect(twoSum([1, 2, 3, 4, 5], 9)).toEqual([[4,5]]);
  });
});
