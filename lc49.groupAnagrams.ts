// https://leetcode.com/problems/group-anagrams/?envType=study-plan-v2&envId=top-interview-150
function groupAnagrams(strs: string[]): string[][] {
  const anagrams: Record<string, string[]> = {};
  
  for (let i = 0; i < strs.length; i++) {
    let curr = strs[i];
    const currSorted = sortString(curr);
    if (anagrams[currSorted]) {
      anagrams[currSorted].push(curr);
    } else {
      anagrams[currSorted] = [curr];
    }
  }

  return Object.values(anagrams);
}

function sortString(str: string): string {
  return str.split("").sort().join("");
}

// sort all strings and compare to group them
