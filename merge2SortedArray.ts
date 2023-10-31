// https://leetcode.com/problems/merge-sorted-array/?envType=study-plan-v2&envId=top-interview-150
export function merge(
  nums1: number[],
  m: number,
  nums2: number[],
  n: number
): void {
  let i = m - 1,
    j = n - 1;

  while (i > -1 && j > -1) {
    if (nums1[i] > nums2[j]) {
      nums1[i + j + 1] = nums1[i];
      i--;
    } else {
      //   nums2[j] > nums1[i];
      nums1[i + j + 1] = nums2[j];
      j--;
    }
  }

  while (i > -1) {
    nums1[i + j + 1] = nums1[i];
    i--;
  }

  while (j > -1) {
    nums1[i + j + 1] = nums2[j];
    j--;
  }
}
