import { sortArray } from "./sortArray";

describe("sortArray", () => {
  it("should run lc tc 1", () => {
    expect(sortArray([5, 2, 3, 1])).toEqual([1, 2, 3, 5]);
  });

  it("should run lc tc 2", () => {
    expect(sortArray([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
  });

  it("should sort empty array", () => {
    expect(sortArray([])).toEqual([]);
  });

  it("should sort all elements same", () => {
    expect(sortArray([1, 1, 1, 1, 1])).toEqual([1, 1, 1, 1, 1]);
  });

  it("should sort negative elements", () => {
    expect(sortArray([-3, -7, 11, 3, -1])).toEqual([-7, -3, -1, 3, 11]);
  });
});
