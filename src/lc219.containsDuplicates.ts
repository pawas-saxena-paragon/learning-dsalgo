export function containsNearbyDuplicate(nums: number[], k: number): boolean {
  let start = 0;
  const window = [];

  k = Math.min(k, nums.length - 1);
  do {
    // update window
    window.length = 0;
    for (
      let i = start, count = 0;
      count < k + 1;
      i = (i + 1) % nums.length, count++
    ) {
      window.push(nums[i]);
    }

    if (findDuplicates(window) !== null) {
      return true;
    } else {
      // increment in circular fasion
      start = (start + 1) % nums.length;
    }
  } while (start !== 0);

  return false;
}

function findDuplicates(arr: number[]): number | null {
  let store = new Set();

  for (let i = 0; i < arr.length; i++) {
    if (store.has(arr[i])) {
      return arr[i];
    } else {
      store.add(arr[i]);
    }
  }

  return null;
}
