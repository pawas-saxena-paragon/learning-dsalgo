import { letterCasePermutation } from "./letterCasePermutation";

describe("letterCasePermutation", () => {
  it('should lc tc "a1b2"', () => {
    expect(letterCasePermutation("a1b2")).toEqual([
      "a1b2",
      "a1B2",
      "A1b2",
      "A1B2",
    ]);
  });

  it("should lc tc 3z4", () => {
    expect(letterCasePermutation("3z4")).toEqual(["3z4", "3Z4"]);
  });
});
