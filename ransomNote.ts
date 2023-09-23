// https://leetcode.com/problems/ransom-note/?envType=study-plan-v2&envId=top-interview-150
function canConstruct(ransomNote: string, magazine: string): boolean {
  const availableCharCountMap = magazine
    .split("")
    .reduce((acc: Record<string, number>, currentChar: string) => {
      acc[currentChar] = acc[currentChar] ? acc[currentChar] + 1 : 1;
      return acc;
    }, {});

  return ransomNote.split("").every((currentChar: string) => {
    if (availableCharCountMap[currentChar] > 0) {
      availableCharCountMap[currentChar] += -1;
      return true;
    } else return false;
  });
}

console.log(canConstruct("a", "b"));
console.log(canConstruct("aa", "aab"));
