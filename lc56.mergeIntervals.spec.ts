import { checkOverlap } from "./lc56.mergeIntervals";

describe("merge intervals", () => {
  it("checkOverlap 1", () => {
    expect(checkOverlap([[1, 6]], [8, 10])).toEqual(null);
  });

  it("checkOverlap 2", () => {
    expect(checkOverlap([[1, 6]], [0, 1])).toEqual(0);
  });

  it("checkOverlap 3", () => {
    expect(checkOverlap([[1, 6]], [0, 0])).toEqual(null);
  });

  it("checkOverlap 4", () => {
    expect(checkOverlap([[1, 6]], [5, 10])).toEqual(0);
  });
});
