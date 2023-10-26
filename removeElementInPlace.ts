// https://leetcode.com/problems/remove-element/?envType=study-plan-v2&envId=top-interview-150
export function removeElement(nums: number[], val: number): number {
  let front: number = 0;
  let end: number = nums.length - 1;

  while (front <= end) {
    if (nums[front] === val) {
      //swap with the last element
      // decrement end;
      nums[front] = nums[end];
      end--;
    } else {
      //otherwise increment front
      front++;
    }
  }

  // console.log('final', nums);

  return end + 1 ;
}
