import { MinHeap } from "./minHeap";

// https://youtu.be/dYfM6J1y0mU?si=D5JKlYKKu7ifAP9I
// also known as Nearly Sorted array
export function kSortedArraySort(arr: number[], k: number): number[] {
  const minHeap = new MinHeap();
  const result: number[] = [];
  for (let i = 0; i < arr.length; i++) {
    minHeap.insert(arr[i]);
    if (minHeap.size() === k + 1) {
      result.push(minHeap.extractMin());
    }
  }

  while (minHeap.size() !== 0) {
    result.push(minHeap.extractMin());
  }

  return result;
}
