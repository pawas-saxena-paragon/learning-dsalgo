// https://leetcode.com/problems/k-th-symbol-in-grammar/
export function kthGrammar(n: number, k: number): number {
  return parseInt(getNthString(n).charAt(k - 1));
}

/**
 * this fn gives a OOM error. Need a way to not compute for n layer.
 * @param n 
 * @returns 
 */
function getNthString(n: number): string {
  if (n === 1) {
    //ignoring k for now as there is just one char
    return "0";
  }

  const n_1String = getNthString(n - 1);
  let result = "";
  for (let char of n_1String) {
    result += char === "0" ? "01" : "10";
  }

  return result;
}
