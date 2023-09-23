//https://leetcode.com/problems/remove-duplicates-from-sorted-array/?envType=study-plan-v2&envId=top-interview-150
function removeDuplicates(nums: number[]): number {
  let latestUniqueElementPtr: number = 0;
  const visited = new Set();
  for (
    let iterationPtr: number = 0;
    iterationPtr < nums.length;
    iterationPtr++
  ) {
    if (visited.has(nums[iterationPtr])) {
      //duplicate so do nothing
    } else {
      visited.add(nums[iterationPtr]);
      //swap with the latest unique pointer because the it is a unique element. So we have to move it to the position
      // of latestUniqueELementPtr and increment the same pointer
      let temp = nums[latestUniqueElementPtr];
      nums[latestUniqueElementPtr] = nums[iterationPtr];
      nums[iterationPtr] = temp;
      latestUniqueElementPtr++;
    }
  }

  //   console.log('final array', nums);
  return latestUniqueElementPtr;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
