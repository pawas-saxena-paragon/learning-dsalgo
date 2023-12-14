import { ListNode } from "./linkedList.util";

function hasCycle(head: ListNode | null): boolean {
  let slowPtr = head;
  let fastPtr = head?.next?.next;
  do {
    if (fastPtr === slowPtr) {
      return true;
    }

    fastPtr = fastPtr?.next?.next;
    slowPtr = slowPtr?.next;
  } while (Boolean(fastPtr) && Boolean(slowPtr));

  return false;
}
