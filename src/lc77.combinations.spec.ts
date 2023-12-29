import { combine } from "./lc77.combinations";

describe("combination", () => {
  it("n = 4, k = 2", () => {
    expect(combine(4, 2)).toEqual([
      [1, 2],
      [1, 3],
      [1, 4],
      [2, 3],
      [2, 4],
      [3, 4],
    ]);
  });

  it("n = 1, k = 1", () => {
    expect(combine(1, 1)).toEqual([[1]]);
  });

  it("n= 2, k=2", () => {
    expect(combine(2, 2)).toEqual([[1, 2]]);
  });
});
