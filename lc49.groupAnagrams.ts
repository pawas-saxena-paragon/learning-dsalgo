// https://leetcode.com/problems/group-anagrams/?envType=study-plan-v2&envId=top-interview-150
function groupAnagrams(strs: string[]): string[][] {
  const result = strs.reduce((prev: string[][], curr: string) => {
    const anagramMatchIndex = prev.findIndex((ele: string[]) =>
      areAnagrams(ele[0], curr)
    );
    if (anagramMatchIndex > -1) {
      prev[anagramMatchIndex].push(curr);
    } else {
      prev.push([curr]);
    }

    return prev;
  }, [] as string[][]);

  return result;
}

function areAnagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  } else {
    const frequency = {};
    for (let i = 0; i < str1.length; i++) {
      frequency[str1.charAt(i)] = frequency[str1.charAt(i)]
        ? frequency[str1.charAt(i)] + 1
        : 1;

      frequency[str2.charAt(i)] = frequency[str2.charAt(i)]
        ? frequency[str2.charAt(i)] - 1
        : -1;
    }

    return Object.values(frequency).every((ele) => ele === 0);
  }
}

// sort all strings and compare to group them
