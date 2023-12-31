import {
  search,
  binarySearch,
  getRotationPivotIndex,
} from "./lc33.searchRotatedSortedArray";

describe("searchRotatedArr", () => {
  it("nums = [4,5,6,7,0,1,2], target = 0", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toEqual(4);
  });

  it("nums = [4,5,6,7,0,1,2], target = 3", () => {
    expect(search([4, 5, 6, 7, 0, 1, 2], 3)).toEqual(-1);
  });

  it("nums = [1], target = 0", () => {
    expect(search([1], 0)).toEqual(-1);
  });

  it("nums = [1], target = 1", () => {
    expect(search([1], 1)).toEqual(0);
  });

  it("nums = [1,2], target = 0", () => {
    expect(search([1], 0)).toEqual(-1);
  });

  it("nums = [2,1], target = 1", () => {
    expect(search([1], 1)).toEqual(0);
  });
});

describe("#binary search", () => {
  it("Binary search nums = [1], target = 0", () => {
    expect(binarySearch([1], 0, 0, 0)).toEqual(-1);
  });

  it("Binary search nums = [1,2,3,4,5], target = 0", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 0, 0, 4)).toEqual(-1);
  });

  it("Binary search nums = [1,2,3,4,5], target = 25", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 25, 0, 4)).toEqual(-1);
  });

  it("Binary search nums = [1,2,3,4,5], target = 1", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 1, 0, 4)).toEqual(0);
  });

  it("Binary search nums = [1,2,3,4,5], target = 5", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 5, 0, 4)).toEqual(4);
  });

  it("Binary search nums = [1,2,3,4,5], target = 4", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 4, 0, 4)).toEqual(3);
  });

  it("Binary search nums = [0,1,2], target = 0", () => {
    expect(binarySearch([0, 1, 2], 0, 0, 2)).toEqual(0);
  });

  it("Binary search nums = [2,5], target = 0", () => {
    expect(binarySearch([2,5], 0, 0, 1)).toEqual(-1);
  });

  it("Binary search nums = [2,5], target = 2", () => {
    expect(binarySearch([2,5], 2, 0, 1)).toEqual(0);
  });

  it("Binary search nums = [2,5], target = 5", () => {
    expect(binarySearch([2,5], 5, 0, 1)).toEqual(1);
  });

  it("Binary search nums = [2,5], target = 25", () => {
    expect(binarySearch([2,5], 25, 0, 1)).toEqual(-1);
  });
});

describe("#getRotationPivotIndex", () => {
  it("#getRotationPivotIndex nums = [4,5,6,7,0,1,2]", () => {
    expect(getRotationPivotIndex([4, 5, 6, 7, 0, 1, 2])).toEqual(4);
  });

  it("#getRotationPivotIndex nums = [1,2,4,5,6,7,0]", () => {
    expect(getRotationPivotIndex([1, 2, 4, 5, 6, 7, 0])).toEqual(6);
  });

  it("#getRotationPivotIndex nums = [0,1,2,4,5,6,7]", () => {
    expect(getRotationPivotIndex([0, 1, 2, 4, 5, 6, 7])).toEqual(-1);
  });

  it("#getRotationPivotIndex nums = [7,0,1,2,4,5,6]", () => {
    expect(getRotationPivotIndex([7, 0, 1, 2, 4, 5, 6])).toEqual(1);
  });
});
