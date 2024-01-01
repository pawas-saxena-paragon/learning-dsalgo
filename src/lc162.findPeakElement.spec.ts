import { findPeakElement } from "./lc162.findPeakElement";

describe("findPeakElement", () => {
  it("[1,2,3,1]", () => {
    expect(findPeakElement([1, 2, 3, 1])).toEqual(2);
  });

  it("[1,2,1,3,5,6,4]", () => {
    expect(findPeakElement([1, 2, 1, 3, 5, 6, 4])).toEqual(2);
  });
});
