// https://leetcode.com/problems/two-sum/?envType=study-plan-v2&envId=top-interview-150
function twoSum(nums: number[], target: number): [number, number][] {
  const visited: Record<number, boolean> = {};
  const solns: [number, number][] = [];
  nums.forEach((ele: number) => {
    const complementEle: number = target - ele;
    if (visited[complementEle]) {
      solns.push([ele, complementEle]);
    }
    visited[ele] = true;
  });

  return solns;
}

// console.log(twoSum([2, 7, 11, 15, 4, 5], 9));
console.log(twoSum([1, 2, 3, 4], 5));

// console.log(twoSum([3, 2, 4], 6));
// console.log(twoSum([3, 3], 6));
