// https://leetcode.com/problems/combinations/?envType=study-plan-v2&envId=top-interview-150
//comeback to this problem later Was not able to understand it.
export function combine(n: number, k: number): number[][] {
  const arr = new Array(n).fill(-1).map((_, index) => index + 1);
  return combineArr(arr, k);
}

function combineArr(nums: number[], k: number): number[][] {
  const sol = new Solution();
  sol.solve(nums, k);
  return sol.result;
}

class Solution {
  result: number[][];
  constructor() {
    this.result = [];
  }

  solve(nums: number[], k: number): number[][] {
    if (nums.length < k) {
      return [nums];
    }
    if (nums.length === k) {
      this.result.push(nums);
      return [nums];
    }
    if (nums.length === 1 || k === 1) {
      const resultArr = nums.map((ele: number) => [ele]);
      this.result.push(...resultArr);
      return resultArr; // check wether it should be nums or [nums] as nums is also an array. It should be [nums] as
      // take example nums [1] ans  is [[1]]
    }

    for (let i = 0; i < nums.length; i++) {
      const iEle = nums[i];
      const nextToEnd = nums.slice(i + 1);
      // here due to the slice the original array is not changed . Due to this special scenario I dont have to backtrack.
      // this is hidden backtracking in a way
      this.result.push(...this.prefix(iEle, combineArr(nextToEnd, k - 1)));
    }
  }

  prefix(num: number, arr: number[][]): number[][] {
    return arr.map((eleArr: number[]) => [num, ...eleArr]);
  }
}

/**
 * create a central variable to store the results
 * base condition is arr.length <= k or k === 1 or arr.length === 1
 *
 */
