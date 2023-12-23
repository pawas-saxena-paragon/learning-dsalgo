import { isPalindrome } from "./lc125.validPalindrome";
describe("validPalindrome", () => {
  it('"A man, a plan, a canal: Panama"', () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
  });
});
