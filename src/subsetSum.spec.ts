import Solution from "./subsetSum";

describe("SubsetSum", () => {
  let solution: Solution;
  beforeEach(() => {
    solution = new Solution();
  });
  it("gfg test case", () => {
    expect(solution.isSubsetSum([3, 34, 4, 12, 5, 2], 6, 9)).toEqual(true);
  });
});
