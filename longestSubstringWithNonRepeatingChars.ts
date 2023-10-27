// https://leetcode.com/problems/longest-substring-without-repeating-characters/
export function lengthOfLongestSubstring(s: string): number {
  let start = 0;
  let end = 1;
  const uniqueSubstrLengths = [];
  let windowSubstr = s.slice(start, end);
  let prevStr = windowSubstr;
  while (end <= s.length) {
    // move end forward
    prevStr = windowSubstr;
    windowSubstr = s.slice(start, end);
    console.log("outer loop", windowSubstr);
    const ARE_CHARS_UNIQUE = areCharsUnique(windowSubstr);
    if (!ARE_CHARS_UNIQUE) {
      uniqueSubstrLengths.push(prevStr.length);
      console.log("saving", prevStr);
    }

    while (!areCharsUnique(windowSubstr) && start <= end) {
      // move start forward
      start++;
      prevStr = windowSubstr;
      windowSubstr = s.slice(start, end);
      console.log("inside loop", windowSubstr);
    }
    end++;
  }

  if (areCharsUnique(windowSubstr)) {
    //saving the unique substring at the last step
    uniqueSubstrLengths.push(windowSubstr.length);
    console.log('Saving at last step',  windowSubstr);
  }

  return uniqueSubstrLengths.length ? Math.max(...uniqueSubstrLengths) : 0;
}

function areCharsUnique(str: string): boolean {
  if (str.length === 0) {
    return true;
  }

  if (str.length === 1) {
    return true;
  }
  const charsSet = new Set();

  for (let char of str) {
    if (charsSet.has(char)) {
      return false;
    }
    charsSet.add(char);
  }

  return true;
}
