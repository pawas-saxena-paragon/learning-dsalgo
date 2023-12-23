import { kthSmallestElement } from "./kthSmallestElement";

describe("kthSmallestElement", () => {
  it("[7,10,4,3,20,15]", () => {
    expect(kthSmallestElement([7, 10, 4, 3, 20, 15], 3)).toEqual(7);
  });
});
