// https://leetcode.com/problems/container-with-most-water/?envType=study-plan-v2&envId=top-interview-150
export function maxArea(height: number[]): number {
  // handle the case with just 2 sides or lines
  let rightPtr = height.length - 1;
  let leftPtr = 0;
  let maxWater = 0;

  while (leftPtr < rightPtr) {
    const area =
      Math.min(height[leftPtr], height[rightPtr]) * (rightPtr - leftPtr);
    maxWater = Math.max(maxWater, area);

    // moving the smaller veritical line ptr
    if (height[leftPtr] > height[rightPtr]) {
      rightPtr--;
    } else {
      leftPtr++;
    }
  }

  return maxWater;
}

/**
 * [1,8,6,2,5,4,8,3,7]
 *  L1 R7 1*8 = 1
 *  move Left L8, R7 7*7 = 49
 *  move right L8 R3 3*6 = 18
 *  move right L8 R8 8*5 = 40
 *  move left L6 R8 6*4 = 24
 *  move left L2 R8 2*3 = 6
 *  move left L5 R8 5*2 = 10
 *  move left L4 R8 4*1 = 4
 *
 *
 * ---------------- moving the larger side instead
 * L1 R7 1*8 = 1
 * move right L1 R3 1*7 = 7
 * move right L1 R8 1*6 = 6
 *
 * and so on . This is definitely not going to get the right answer
 */
