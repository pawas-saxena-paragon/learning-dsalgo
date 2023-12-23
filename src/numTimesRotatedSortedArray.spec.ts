import { numTimesRotatedSortedArray } from "./numTimesRotatedSortedArray";

describe("numTimesRotatedSortedArray", () => {
  it("[5,6,1,2,3,4]", () => {
    expect(numTimesRotatedSortedArray([5, 6, 1, 2, 3, 4])).toEqual(2);
  });

  it("[]", () => {
    expect(numTimesRotatedSortedArray([])).toEqual(0);
  });

  it("[1,2,3,4,5,6]", () => {
    expect(numTimesRotatedSortedArray([1, 2, 3, 4, 5, 6])).toEqual(0);
  });

  it("[2,3,4,5,6,1]", () => {
    expect(numTimesRotatedSortedArray([2,3,4,5,6,1])).toEqual(5);
  });
});
