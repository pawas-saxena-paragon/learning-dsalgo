import { findMin } from "./lc153.findMinimumInRotatedSortedArray";

describe("findMinimumInRotatedSortedArray", () => {
  describe("normal array [4,5,6,7,0,1,2]", () => {
    it("match first ele", () => {
      expect(findMin([0, 1, 2, 3, 4, 5, 6, 7])).toEqual(0);
    });

    it("match last ele", () => {
      expect(findMin([1, 2, 3, 4, 5, 6, 7, 0])).toEqual(0);
    });
  });

  describe("one element array [1]", () => {
    it("match first ele", () => {
      expect(findMin([1])).toEqual(1);
    });
  });

  describe("2 elements array [1,2]", () => {
    it("match first ele", () => {
      expect(findMin([1, 2])).toEqual(1);
    });

    it("match last ele", () => {
      expect(findMin([2, 1])).toEqual(1);
    });
  });
});
