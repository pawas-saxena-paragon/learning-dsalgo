export function quickSort(arr: number[], low: number, high: number): void {
  if (low < high) {
    const pivotIndex = partition(arr, low, high);
    quickSort(arr, low, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, high);
  }
}

/**
 * 
 * @param low bound for performing the sort
 * @param high bound for performing the sort
 * @returns index of the pivot after moving pivot to the correct position
 * @summary iterates over the array and whenever it finds an element smaller than the pivot , 
 * it moves the smaller element to the start (first half) porition of the array. 
 * At the same time it remembers the index from the first half that are occupied so that after the 
 * complete traversal of the array `i + 1` will hold the correct position for pivot.
 * 
 * The complexity worst case is O(n2) and average case is O(nLogn). Worst case happens in an already sorted array
 * This algo does not require any extra space O(1) complexity
 */
export function partition(arr: number[], low: number, high: number): number {
  let i = low - 1; // i keeps track of the last index of smalller elements compared to pivot.
  // keeping this value as low -1 because before every swap, i is going to be incremented.
  let pivot = arr[high];

  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
  }

  i++;
  [arr[i], arr[high]] = [arr[high], arr[i]]; // swap pivot with i. i represents the position of pivot after rearranging the array around pivot
  return i;
}
