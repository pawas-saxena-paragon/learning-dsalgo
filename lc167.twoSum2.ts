// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/?envType=study-plan-v2&envId=top-interview-150
function twoSum(numbers: number[], target: number): number[] {
  for (let i = 0; i < numbers.length; i++) {
    const match = binarySearch(
      numbers,
      i + 1,
      numbers.length - 1,
      target - numbers[i]
    );
    if (match !== null) {
      return [numbers[i], numbers[match]];
    }
  }
}

export function binarySearch(
  numbers: number[],
  start: number,
  end: number,
  toFind: number
): number | null {
  if (numbers[start] > toFind) {
    return null;
  }

  while (start <= end) {
    console.log('start', start, 'end', end);
    let mid = Math.floor((start + end) / 2);
    if (numbers[mid] === toFind) {
      return mid;
    }
    if (numbers[mid] > toFind) {
      end = mid;
    }
    else if(numbers[mid] < toFind){
        start = mid
    }
  }

  return null;
}
