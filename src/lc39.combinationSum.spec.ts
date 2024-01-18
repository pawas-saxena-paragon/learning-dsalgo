import { combinationSum } from "./lc39.combinationSum";

describe("combination sum", () => {
  it("candidates = [2,3,6,7], target = 7", () => {
    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([[2, 2, 3], [7]]);
  });

  it("candidates = [2,3,5], target = 8", () => {
    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);
  });

  it("candidates = [2], target = 1", () => {
    expect(combinationSum([2], 1)).toEqual([]);
  });

  it("candidates = [2,4,6], target = 27", () => {
    expect(combinationSum([2,4,6], 27)).toEqual([]);
  });

  it("candidates = [2,4,6], target = 1", () => {
    expect(combinationSum([2,4,6], 1)).toEqual([]);
  });
});
