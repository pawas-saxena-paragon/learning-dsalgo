// https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-interview-150

export function productExceptSelf(nums: number[]): number[] {
  return multiplyElementsOfArr(getPrefixArr(nums), getSuffixArr(nums));
}

export function getPrefixArr(nums: number[]): number[] {
  const N = nums.length;
  const prefixArr = [];
  prefixArr[0] = 1;
  prefixArr[1] = nums[0] * prefixArr[0];
  for (let i = 2; i < N; i++) {
    prefixArr[i] = prefixArr[i - 1] * nums[i - 1];
  }

  return prefixArr;
}

export function getSuffixArr(nums: number[]): number[] {
  const N = nums.length;
  const suffixArr = [];

  suffixArr[N-1] = 1;
  suffixArr[N - 2] = nums[N-1];

  for (let i = N - 3; i >= 0; i--) {
    suffixArr[i] = nums[i + 1] * suffixArr[i + 1];
  }

  return suffixArr;
}

function multiplyElementsOfArr(arr1: number[], arr2: number[]): number[] {
  if (arr1.length !== arr2.length) {
    throw "incorrect array sizes";
  }
  const N = arr1.length;
  const result = [];
  for (let i = 0; i < N; i++) {
    result[i] = arr1[i] * arr2[i];
  }

  return result;
}
