// https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150
// https://www.geeksforgeeks.org/boyer-moore-majority-voting-algorithm/
export function majorityElement(nums: number[]): number {
  let majorityElement: number = Infinity;
  let vote: number = 0;

  for (let ele of nums) {
    if (vote === 0) {
      majorityElement = ele;
      vote = 1;
    } else if (ele === majorityElement) {
      vote++;
    } else {
      vote--;
    }
  }

  return majorityElement;
}
