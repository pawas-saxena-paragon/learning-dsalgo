// https://leetcode.com/problems/jump-game/?envType=study-plan-v2&envId=top-interview-150
export function canJump(nums: number[]): boolean {
  if (nums.length === 1) {
    return true;
  }


  let destinationIndex = nums.length -1;
  for (let i = nums.length - 2; i >= 0; i--) {
    const distanceToDestination = destinationIndex - i;

    if (nums[i] >= distanceToDestination) {
      destinationIndex = i;
    }
  }
  return destinationIndex === 0;
}

// explore all choices recursively .
// won't be able to invalidate choices as you can always jump 1 step. But some of the choices may be invalid . You need not check everything
// array wont have -ve values . But zero is possible . Zero means you can stop looking further
// size = 6, firstZero = 4, last index = 5
// 2

// if you can reach lastIndex from a source then you can also reach any index less than the lastIndex
