import { ListNode, swapNodes, traverse } from "./linkedList.util";

// https://leetcode.com/problems/sort-list/?envType=study-plan-v2&envId=top-interview-150
function sortList(head: ListNode | null): ListNode | null {
  const high = traverse(head).length;
  quickSortLL(head, 0, high - 1);

  return head;
}

function quickSortLL(head: ListNode | null, low: number, high: number): void {
  if (low < high) {
    const { i: pivotIndex, head: head1 } = partitionLL(head, low, high);
    quickSortLL(head1, low, pivotIndex - 1);
    quickSortLL(head1, pivotIndex + 1, high);
  }
}

function partitionLL(
  head: ListNode | null,
  low: number,
  high: number
): { i: number; head: ListNode | null } {
  let iPtr;
  let i = low - 1;
  let ptr = head;
  let traverseCount = -1;
  let pivot = head.val;

  while (ptr !== null) {
    traverseCount++;
    if (traverseCount === low) {
      iPtr = ptr;
    }
    if (traverseCount > low && traverseCount <= high) {
      if (ptr.val < pivot) {
        iPtr = iPtr.next;
        i++;
        // swap
        head = swapNodes(head, i, traverseCount);
      }
    }

    ptr = ptr.next;
  }

  iPtr = iPtr.next;
  i++;
  // 0 index is the pivot
  head = swapNodes(head, i, 0);

  return { i, head };
}
