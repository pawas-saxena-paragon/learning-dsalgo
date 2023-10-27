import { lengthOfLongestSubstring } from "./longestSubstringWithNonRepeatingChars";

describe("getLongestNonRepatingStringInWindow", () => {
  it('s = "abcabcbb"', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toEqual(3);
  });

  it('s = "bbbbb"', () => {
    expect(lengthOfLongestSubstring("bbbbb")).toEqual(1);
  });

  it('s = "pwwkew"', () => {
    expect(lengthOfLongestSubstring("pwwkew")).toEqual(3);
  });

  it('s= "au"', () => {
    expect(lengthOfLongestSubstring("au")).toEqual(2);
  });
});
