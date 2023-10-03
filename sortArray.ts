export function sortArray(nums: number[]): number[] {
  if (nums.length === 0) {
    return [];
  }

  const { min, minIndex } = findMin(nums);
  const restOfArr = nums.filter(
    (_: number, index: number) => index !== minIndex
  );

  return [min, ...sortArray(restOfArr)];
}

function findMin(nums: number[]): { min: number; minIndex: number } {
  let min = Infinity;
  let minIndex = -1;

  nums.forEach((ele: number, index: number) => {
    if (ele < min) {
      min = ele;
      minIndex = index;
    }
  });

  return { min, minIndex };
}
