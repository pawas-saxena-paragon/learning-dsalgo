function missingNumber(nums: number[]): number {
  const maxNum = nums.length;

  const expectedSumOfAll = (maxNum * (maxNum + 1)) / 2;
  const actualSum = nums.reduce((prev, curr) => prev + curr);
  return expectedSumOfAll - actualSum;
}
