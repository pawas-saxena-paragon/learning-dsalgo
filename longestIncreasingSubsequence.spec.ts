import { lengthOfLIS } from "./longestIncreasingSubsequence";
describe("longestIncreasingSubsequence", () => {
  it("nums = [10,9,2,5,3,7,101,18]", () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
  });

  it("nums = [0,1,0,3,2,3]", () => {
    expect(lengthOfLIS([0,1,0,3,2,3])).toEqual(4);
  });

  it("nums = [7,7,7,7,7,7,7]", () => {
    expect(lengthOfLIS([7,7,7,7,7,7,7])).toEqual(1);
  });
});
