// check versions of this file as I have done different solns for this.
// https://leetcode.com/problems/generate-parentheses/
// https://youtu.be/eyCj_u3PoJE?si=uVMtTq4L9SfIL7r_
export function generateParenthesis(n: number): string[] {
  // open parenthesis are fine
  // at any time if close parenthesis are more than open at any point in a partial string , then the string is invalid

  const p = new Parenthesis(n);
  p.solve(n, n, "");

  return p.solution;
}

class Parenthesis {
  solution: string[];
  constructor(private n: number) {
    this.solution = [];
  }

  solve(open: number, closed: number, patternUsedTillNow: string): void {
    if (open === 0) {
      // no more choice use all closed
      while (closed !== 0) {
        patternUsedTillNow += ")";
        closed--;
      }
      this.solution.push(patternUsedTillNow);
      return;
    }

    if (open > closed) {
      // break
      return;
    }

    this.solve(open - 1, closed, patternUsedTillNow + "(");
    this.solve(open, closed - 1, patternUsedTillNow + ")");
  }
}
