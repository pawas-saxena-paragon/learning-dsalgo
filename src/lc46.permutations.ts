// https://leetcode.com/problems/permutations/?envType=study-plan-v2&envId=top-interview-150
export function permute(nums: number[]): number[][] {
  const sol = new Solution();
  sol.solve(nums);
  return sol.result;
}

class Solution {
  result: number[][];

  constructor() {
    this.result = [];
  }

  solve(nums: number[]): void {
    if (nums.length === 1) {
      this.result.push(nums);
    }

    for (let i = 0; i < nums.length; i++) {
      const iEle = nums[i];
      const restOfArr = nums.filter(
        (_ele: number, index: number) => index !== i
      );
      const perm = permute(restOfArr);
      const pre = this.prefix(iEle, perm);
      this.result.push(...pre);
    }
  }

  prefix(char: number, nums: number[][]): number[][] {
    return nums.map((eleArr: number[]) => [char, ...eleArr]);
  }
}

/**
 *  choose first element . place it in the start and end. permute the rest of elements
 *  choose the second element
 *
 * 1 [2,3]
 * 1 [[2,3],[3,2]]
 * [[1,2,3], [3,2, 1]]
 * [[2,3,1], [3,2,1]]
 */
