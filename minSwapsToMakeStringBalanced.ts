/**
 * https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-string-balanced/
 * @param s
 *
 */
function minSwaps(s: string): number {
  type BracketCount = { "[": number; "]": number };

  const countIterator: BracketCount = { "[": 0, "]": 0 };
  const countsAtEachStep: BracketCount[] = s
    .split("")
    .map((current: string) => {
      countIterator["["] = (current === "[" ? 1 : 0) + countIterator["["];
      countIterator["]"] = (current === "]" ? 1 : 0) + countIterator["]"];
      return { "[": countIterator["["], "]": countIterator["]"] };
    });

  console.log(countsAtEachStep);
  return 1;
}

console.log(minSwaps("]]][[["), minSwaps("[[][]]"));

