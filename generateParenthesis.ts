// https://leetcode.com/problems/generate-parentheses/
// https://youtu.be/eyCj_u3PoJE?si=uVMtTq4L9SfIL7r_
export function generateParenthesis(n: number): string[] {
  return solve(n, n, n);
}

function solve(
  unUsedOpen: number,
  unUsedClosed: number,
  total: number
): string[] {
  if (unUsedClosed === 1 && unUsedOpen === 1) {
    return ["()"];
  }

  if (unUsedClosed === 0 && unUsedOpen > 0) {
    return [Array(unUsedOpen).fill("(").join("")];
  }
  if (unUsedOpen === 0 && unUsedClosed > 0) {
    return [Array(unUsedClosed).fill(")").join("")];
  }

  // choose open
  const chooseOpen = [
    ...solve(unUsedOpen - 1, unUsedClosed, total).map(
      (char: string) => "(" + char
    ),
  ];

  let chooseClosed = [];
  if (unUsedClosed > unUsedOpen) {
    // if more close are available than availableOpen proceed further
    chooseClosed = [
      ...solve(unUsedOpen, unUsedClosed - 1, total).map(
        (char: string) => ")" + char
      ),
    ];
  }

  return [...chooseOpen, ...chooseClosed];
}
