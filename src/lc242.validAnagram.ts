// https://leetcode.com/problems/valid-anagram/?envType=study-plan-v2&envId=top-interview-150
export function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  let charMap = new Map();

  for (let i = 0; i < s.length; i++) {
    charMap.set(s[i], charMap.has(s[i]) ? charMap.get(s[i]) + 1 : 1);

    charMap.set(t[i], charMap.has(t[i]) ? charMap.get(t[i]) - 1 : -1);
  }


  for (let value of charMap.values()) {
    console.log("for of", value);
    if (value !== 0) {
      return false;
    }
  }

  return true;
}
