import { moveZeroes } from "./lc283.moveZeros";

describe("move zeros", () => {
  it("[0,1,0,3,12]", () => {
    const arr = [0,1,0,3,12];
    moveZeroes(arr)
    expect(arr).toEqual([1,3,12,0,0]);
  });

  it("[0]", () => {
    const arr = [0];
    moveZeroes(arr)
    expect(arr).toEqual([0]);
  });

});
