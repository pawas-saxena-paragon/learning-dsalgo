import { isSubsequence } from "./isSubsequence";
describe("isSubsequence", () => {
  it('s = "abc", t = "ahbgdc"', () => {
    expect(isSubsequence("abc", "ahbgdc")).toEqual(true);
  });
});
