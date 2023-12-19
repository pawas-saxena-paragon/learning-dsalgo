// https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/?envType=list&envId=pm1gvxgg

import { ListNode } from "./linkedList.util";

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  const size = getSize(head);
  const indexFromBeg = size - n + 1;
  return removeNthNodeFromBeg(head, indexFromBeg);
}

function removeNthNodeFromBeg(
  head: ListNode | null,
  n: number
): ListNode | null {
  let count = 0;

  let ptr = head;
  let prev = head;

  if(n === 1){
    head = head.next;
    return head;
  }

  while (ptr !== null) {
    count++;
    if (count === n) {
      // delete this node
      prev.next = ptr.next;
      return head;
    }
    prev = ptr;
    ptr = ptr.next;
  }
}

function getSize(head: ListNode | null): number {
  let count = 0;
  let ptr = head;

  while (ptr !== null) {
    count++;
    ptr = ptr.next;
  }

  return count;
}
