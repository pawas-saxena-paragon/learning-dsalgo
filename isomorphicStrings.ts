// https://leetcode.com/problems/isomorphic-strings/?envType=study-plan-v2&envId=top-interview-150
function isIsomorphic(s: string, t: string): boolean {
  const m1: number[] = new Array(256).fill(0);
  const m2: number[] = new Array(256).fill(0);
  const n: number = s.length;

  for (let i = 0; i < n; ++i) {
    console.log('111111111', m1[s.charCodeAt(i)], s.charAt(i), m2[t.charCodeAt(i)], t.charAt(i));
    if (m1[s.charCodeAt(i)] !== m2[t.charCodeAt(i)]) {
      return false;
    }
    m1[s.charCodeAt(i)] = i + 1;
    m2[t.charCodeAt(i)] = i + 1;
  }

  return true;
}

// Example usage:
const result: boolean = isIsomorphic("paper", "title");
console.log(result); // Output: true
