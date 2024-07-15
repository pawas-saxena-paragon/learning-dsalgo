import { MaxHeap } from "./maxHeap";
// https://www.youtube.com/watch?v=PiGYS7BbV_Q
// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/description/?envType=study-plan-v2&envId=top-interview-150
function kSmallestPairs(
  nums1: number[],
  nums2: number[],
  k: number
): number[][] {
  const h1 = new MaxHeap();
  const h2 = new MaxHeap();
}

function kthSmallestElement(arr: number[], k: number): number {
  const maxHeap = new MaxHeap();
  for (let i = 0; i < arr.length; i++) {
    maxHeap.insert(arr[i]);
    if (maxHeap.size() >= k) {
      maxHeap.extractMax();
    }
  }

  return maxHeap.peek();
}

/**
 * create a heap and start adding values to the heap . Once the size of heap becomes k then thik about something to do.
 * since we are dealing with samllest sum we gotta take max heap/
 * if the size of heap is k then it will contain the first k small values till that point
 * Max Heap will geive the max value . it has an Extract max function that will provide the max value and also remove it
 *
 * find first k small elements from both nums1 and nums2
 * then do a cartesian product of both these arrays and  find the sum of these pairs
 * find the first k small sums and do a lookup and find pairs from the sum values
 *
 * This approach wont use the sorted property or hint provided
 */
