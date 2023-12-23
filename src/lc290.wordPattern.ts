// https://leetcode.com/problems/word-pattern/?envType=study-plan-v2&envId=top-interview-150
function wordPattern(pattern: string, s: string): boolean {
  const englishAlphabets = "abcdefghijklmnopqrst";
  const patternAlphabets = new Set(pattern);

  const patternPrefixAlphabets = [...patternAlphabets];
  for(let char of englishAlphabets){
    if(!patternAlphabets.has(char)){
        patternPrefixAlphabets.push(char);
    }
  }
  

  let usedAlphabetPtr = 0;
  const strArr = s.split(" ");
  const patternMap = new Map();
  let computedPattern = "";

  for (let word of strArr) {
    if (patternMap.has(word)) {
      computedPattern += patternMap.get(word);
    } else {
      patternMap.set(word, patternPrefixAlphabets[usedAlphabetPtr]);
      computedPattern += patternPrefixAlphabets[usedAlphabetPtr];
      usedAlphabetPtr++;
    }
  }

  return pattern === computedPattern;
}
