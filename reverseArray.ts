export function reverse(nums: number[], start: number = 0, end?: number): void {
  end = end === undefined ? nums.length - 1 : end;
  end = Math.min(end, nums.length - 1);
  start = Math.max(0, start);

  while (start < end) {
    swap(start, end);
    start++;
    end--;
  }

  function swap(index1: number, index2: number): void {
    const temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
  }
}
