import { maxArea } from "./lc11.containerWithMostWater";

describe("container with most water", () => {
  it("[1,8,6,2,5,4,8,3,7]", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });

  it("[1,1]", () => {
    expect(maxArea([1, 1])).toEqual(1);
  });
});
