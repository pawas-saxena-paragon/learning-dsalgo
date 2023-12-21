import { ListNode } from "./linkedList.util";
// https://leetcode.com/problems/reorder-list/?envType=list&envId=pm1gvxgg
function reorderList(head: ListNode | null): void {
  const revHead = reverseList(head);
  const size = findSize(head);
  let ptrFront = head;
  let ptrRev = revHead;
  for (let i = 0; i <= size; i++) {
    if (i % 2 === 0) {
      // front | rev
      const temp = ptrFront.next;
      ptrFront.next = ptrRev;
      ptrFront = temp;
    } else {
      // rev | front
      const temp = ptrRev.next;
      ptrRev.next = ptrFront;
      ptrRev = temp;
    }
  }
}

function findSize(head: ListNode | null): number {
  if (head === null) {
    return 0;
  } else {
    let ptr = head;
    let count = 0;
    while (ptr !== null) {
      count++;
    }

    return count;
  }
}

function reverseList(head: ListNode | null): ListNode {
  if (head === null || head.next === null) {
    return head;
  }

  let ptr = head.next;
  let prev = head;
  prev.next = null;
  let next = ptr.next;

  while (next !== null) {
    ptr.next = prev;
    prev = ptr;
    ptr = next;
    next = next.next;
  }
  ptr.next = prev;

  return ptr;
}
/**
  find the reverse of the list
  keep picking one element from normal list and one element from reverse of the list alternatively
  repeat the above step until the list size is reached.

  small optimization -> only reverse half of the list  
 */
