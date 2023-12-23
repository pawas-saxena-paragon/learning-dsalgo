// https://leetcode.com/problems/sort-an-array/
export function mergeSort(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }
  if (nums.length === 1) {
    return nums;
  }

  const midIndex = Math.floor((nums.length - 1) / 2);

  const firstArr = mergeSort(nums.slice(0, midIndex + 1));
  const secondArr = mergeSort(nums.slice(midIndex + 1));
  return merge2SortedArr(firstArr, secondArr);
}

export function merge2SortedArr(arr1: number[], arr2: number[]): number[] {
  const resultArr: number[] = [];
  let idx1 = 0,
    idx2 = 0;
  while (idx1 < arr1.length && idx2 < arr2.length) {
    if (arr1[idx1] < arr2[idx2]) {
      resultArr.push(arr1[idx1]);
      idx1++;
    } else {
      resultArr.push(arr2[idx2]);
      idx2++;
    }
  }

  while (idx1 < arr1.length) {
    resultArr.push(arr1[idx1]);
    idx1++;
  }

  while (idx2 < arr2.length) {
    resultArr.push(arr2[idx2]);
    idx2++;
  }

  return resultArr;
}
