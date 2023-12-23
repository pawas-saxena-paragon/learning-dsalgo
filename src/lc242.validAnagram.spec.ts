import { isAnagram } from "./lc242.validAnagram";

describe("valid Anagram", () => {
  it("cat ,rat", () => {
    expect(isAnagram("cat", "rat")).toEqual(false);
  });
});
