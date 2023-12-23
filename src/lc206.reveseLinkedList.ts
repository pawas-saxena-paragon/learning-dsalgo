function reverseList(head: ListNode | null): ListNode | null {
  let orginalListPtr = head;
  let reversedListPtr = null;
  while (orginalListPtr !== null) {
    const temp = reversedListPtr;
    reversedListPtr = copyNode(orginalListPtr);
    reversedListPtr.next = temp;
    orginalListPtr = orginalListPtr.next;
  }

  return reversedListPtr;
}

function copyNode(source: ListNode): ListNode {
  const result = new ListNode();
  result.next = source.next;
  result.val = source.val;
  return result;
}

// 1,2,3,4,5
// temp = null , revsrse = 1, reverse.next = null, original = 2
// temp = 1 , revsrse = 2, reverse.next = 1, original = 3
// temp = 2 , revsrse = 3, reverse.next = 2, original = 4
