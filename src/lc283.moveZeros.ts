// https://leetcode.com/problems/move-zeroes/?envType=study-plan-v2&envId=top-100-liked
export function moveZeroes(nums: number[]): void {
  let zeroPtr = nums.findIndex((ele: number) => ele === 0); // current element is zero
  if (zeroPtr === -1) {
    return;
  }

  for (let i = 0; i < nums.length; ) {
    // console.log("zero Ptr", zeroPtr, "i", i, "nums", nums);
    if (nums[i] !== 0) {
      // swap current with zeroPtr
      // search next zero
      // if zero ptr + i === nums.length then break and dont check anymore

      //zero ptr is always found
      if (zeroPtr > i) {
        i = zeroPtr + 1;
      } else {
        [nums[zeroPtr], nums[i]] = [nums[i], nums[zeroPtr]];

        let iFindZero = zeroPtr;
        while (nums[iFindZero] !== 0) {
          iFindZero++;
        }
        zeroPtr = iFindZero;

        i++;
      }
    } else {
      i++;
    }
  }

  //   console.log("final", nums);
}
