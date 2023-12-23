// https://leetcode.com/problems/contains-duplicate/description/?envType=list&envId=pm1gvxgg
function containsDuplicate(nums: number[]): boolean {
  nums.sort();
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] === nums[i]) {
      return true;
    }
  }

  return false;
}
