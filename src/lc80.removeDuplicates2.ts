// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/?envType=study-plan-v2&envId=top-interview-150
export function removeDuplicates(nums: number[]): number {
  let latestUniqueELementPtr = 0;
  let visited = {};
  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (visited[curr] === 2) {
      // do nothings
    } else {
      visited[curr] = visited[curr] ? visited[curr] + 1 : 1;
      let temp = nums[i];
      nums[i] = nums[latestUniqueELementPtr];
      nums[latestUniqueELementPtr] = temp;
      latestUniqueELementPtr++;
    }
  }

  return latestUniqueELementPtr;
}
