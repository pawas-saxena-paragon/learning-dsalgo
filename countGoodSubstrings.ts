// https://leetcode.com/problems/substrings-of-size-three-with-distinct-characters
export function countGoodSubstrings(s: string): number {
  const windowSize = 3;
  let goodSubstringCount = 0;
  for (let i = 0; i + windowSize - 1 < s.length; i++) {
    const windowSubstr = s.slice(i, i + windowSize);
    if (areCharsUnique3SizeSubstr(windowSubstr)) {
      goodSubstringCount++;
    }
  }

  return goodSubstringCount;
}

function areCharsUnique3SizeSubstr(str: string): boolean {
  return str[0] !== str[1] && str[1] !== str[2] && str[0] !== str[2];
}
