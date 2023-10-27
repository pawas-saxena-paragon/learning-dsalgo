import { kSortedArraySort } from "./sortKSortedArray";

describe("sortKSortedArray", () => {
  it("[6,5,3,2,8,10,9] k=3", () => {
    expect(kSortedArraySort([6, 5, 3, 2, 8, 10, 9], 3)).toEqual([
      2, 3, 5, 6, 8, 9, 10,
    ]);
  });
});
