import { generateParenthesis } from "./generateParenthesis";

describe("generateParenthesis", () => {
  it("should n=3", () => {
    expect(generateParenthesis(3)).toEqual([
      "((()))",
      "(()())",
      "(())()",
      "()(())",
      "()()()",
    ]);
  });

  it("should n=1", () => {
    expect(generateParenthesis(1)).toEqual(["()"]);
  });

  it("should n=2", () => {
    expect(generateParenthesis(2)).toEqual(["(())", "()()"]);
  });
});
