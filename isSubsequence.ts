// https://leetcode.com/problems/is-subsequence/?envType=study-plan-v2&envId=top-interview-150
export function isSubsequence(s: string, t: string): boolean {
  let ptrS: number = 0;
  for (let charT of t) {
    console.log(charT, s[ptrS]);
    if (charT === s[ptrS]) {
      ptrS++;
    }
  }

  console.log('final', ptrS);

  return Boolean(ptrS === s.length);
}
