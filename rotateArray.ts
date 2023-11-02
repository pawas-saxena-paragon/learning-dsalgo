import { reverse } from "./reverseArray";

export function rotate(nums: number[], k: number): void {
  // for each element
  // new pos is i+k % N, where i is current pos
  // but using this approach would require a bigger array of size N + k
  const N = nums.length;
  k = k % N;

  reverse(nums);
  reverse(nums, 0, k - 1);
  reverse(nums, k);
}
