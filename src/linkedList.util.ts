export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function traverse(head: ListNode | null): number[] {
  let ptr = head;
  const result = [];
  while (ptr !== null) {
    result.push(ptr.val);
    ptr = ptr.next;
  }

  return result;
}

export function swapNodes(
  head: ListNode | null,
  index1: number,
  index2: number
): ListNode | null {
  if (head === null) {
    return null;
  }

  let ptr: ListNode = head;
  let prev: ListNode = head
  let count = -1;
  let node1: ListNode;
  let node2: ListNode;
  let prev1: ListNode;
  let prev2: ListNode;
  const biggerIndex = Math.max(index1, index2);
  while (ptr !== null && count <= biggerIndex) {
    count++;
    if (count === index1) {
      prev1 = prev;
      node1 = ptr;
    }
    if (count === index2) {
      prev2 = prev;
      node2 = ptr;
    }
    prev = ptr;
    ptr = ptr.next;
  }
  
  prev1.next = node2;
  prev2.next = node1;

  let temp = node1;
  node1 = node2;
  node2 = temp;
  
  
  if(index1 === 0){
    head = node1;
  }
  if(index2 === 0){
    head = node2;
  }

  return head;
}
