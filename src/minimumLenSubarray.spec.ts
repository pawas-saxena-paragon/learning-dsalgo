import { minSubArrayLen } from "./minimumLenSubarray";

describe("minLenSubArray", () => {
  it("target = 7, nums = [2,3,1,2,4,3]", () => {
    expect(minSubArrayLen(7, [2, 3, 1, 2, 4, 3])).toEqual(2);
  });

  it("target = 4, nums = [1,4,4]", () => {
    expect(minSubArrayLen(4, [1, 4, 4])).toEqual(1);
  });

  it("target = 11, nums = [1,1,1,1,1,1,1,1]", () => {
    expect(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1])).toEqual(0);
  });
});
