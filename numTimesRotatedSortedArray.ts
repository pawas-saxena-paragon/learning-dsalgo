// https://www.youtube.com/watch?v=4WmTRFZilj8&list=PL_z_8CaSLPWeYfhtuKHj-9MpYb6XQJ_f2&index=8
// this soln is wrong
export function numTimesRotatedSortedArray(arr: number[]): number {
  let result: number;
  let start: number;
  let end: number;
  let mid: number;
  // remove
  start = 0;
  end = arr.length - 1;
  mid = Math.floor((start + end) / 2);

  while (start < end) {
    console.log("start", start, "mid", mid, "end", end);
    mid = Math.floor((start + end) / 2);
    if (mid === 0) {
      result = 0;
      break;
    }

    if (arr[mid - 1] > arr[mid]) {
      result = mid + 1;
      break;
    }

    if (arr[mid - 1] > arr[mid]) {
      // result lies towards the right
      start = mid + 1;
    } else {
      // result lies towards the left
      end = mid - 1;
    }
  }

  console.log("loop end", start, mid, end);

  return;
}
