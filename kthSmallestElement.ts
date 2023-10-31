import { MaxHeap } from "./maxHeap";

// https://youtu.be/4BfL2Hjvh8g?si=BFIzZFzHs5SuRIeZ
export function kthSmallestElement(arr: number[], k: number): number {
  const maxHeap = new MaxHeap();
  for (let i = 0; i < arr.length; i++) {
    maxHeap.insert(arr[i]);
    if (maxHeap.size() >= k) {
      maxHeap.extractMax();
    }
  }

  return maxHeap.peek();
}
