import { quickSort } from "./quickSort";

describe("QuickSort", () => {
  it("[6,5,9,1,3,7]", () => {
    const arr = [6, 5, 9, 1, 3, 7];
    quickSort(arr, 0, 5);
    expect(arr).toEqual([1, 3, 5, 6, 7, 9]);
  });
});
