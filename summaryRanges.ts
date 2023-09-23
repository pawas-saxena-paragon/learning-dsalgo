// https://leetcode.com/problems/summary-ranges/?envType=study-plan-v2&envId=top-interview-150
function summaryRanges(nums: number[]): string[] {
  if (nums.length === 0) {
    return [];
  }
  let prev = nums[0];
  const consecutiveArr: number[][] = [];
  let currentConsecutiveEle: number[] = [prev];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === prev + 1) {
      //consecutive
      currentConsecutiveEle.push(nums[i]);
    } else {
      consecutiveArr.push([...currentConsecutiveEle]);
      currentConsecutiveEle = [nums[i]];
    }
    prev = nums[i];
  }
  if (currentConsecutiveEle.length) {
    consecutiveArr.push(currentConsecutiveEle);
  }

  return consecutiveArr.map((ele: number[]) => {
    const first = ele[0];
    const last = ele[ele.length - 1];

    return first === last ? first.toString() : first + "->" + last;
  });
}

console.log(summaryRanges([]));
