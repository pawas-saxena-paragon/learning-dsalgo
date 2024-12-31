export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

// https://leetcode.com/problems/merge-two-sorted-lists/?envType=study-plan-v2&envId=top-interview-150

class LLHelper {
  start: ListNode | null;
  offset: ListNode | null;
  constructor(startNode: ListNode | null) {
    this.start = startNode;
    this.offset = startNode;
  }

  addToList(val: number): void {
    if (this.offset === null) {
      if (this.start === null) {
        // initialize a new list
        this.start = new ListNode(val);
        this.offset = this.start;
      } else {
        throw new Error("offset is null");
      }
    } else {
      this.offset.next = new ListNode(val);
      this.offset = this.offset.next;
    }
  }

  getStart(): ListNode | null {
    return this.start;
  }

  /**
   * this fn should append the list without mutating the original
   */
  changeOffsetLink(nextNode: ListNode): void {
    if (this.offset === null) {
      if (this.start === null) {
        // initialize a new list
        this.start = nextNode;
        this.offset = nextNode;
      } else {
        throw new Error("offset is null");
      }
    } else {
      this.offset.next = nextNode;
    }
  }

  static arrayToLL(arr: number[]): ListNode | null {
    if (arr.length === 0) {
      return null;
    }

    const start: ListNode | null = new ListNode(arr[0]);
    let offset: ListNode | null = start;

    for (let i = 1; i < arr.length; i++) {
      offset.next = new ListNode(arr[i]);
      offset = offset.next;
    }

    return start;
  }

  static printResult(start: ListNode | null): number[] {
    const result: number[] = [];
    while (start !== null) {
      result.push(start.val);
    }
    return result;
  }
}

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  if (list1 === null && list2 === null) {
    return null;
  }
  let currentL1 = list1;
  let currentL2 = list2;
  const resultHelper = new LLHelper(null);

  while (currentL1 !== null || currentL2 !== null) {
    if (currentL1 === null) {
      resultHelper.changeOffsetLink(currentL2);
      break;
    } else if (currentL2 === null) {
      resultHelper.changeOffsetLink(currentL1);
      break;
    } else if (currentL1.val <= currentL2.val) {
      resultHelper.addToList(currentL1.val);
      currentL1 = currentL1.next;
    } else {
      resultHelper.addToList(currentL2.val);
      currentL2 = currentL2.next;
    }
    console.log('iteratoin', currentL1?.val, currentL2?.val); 
  }


  return resultHelper.getStart();
}

console.log(
  LLHelper.printResult(
    mergeTwoLists(LLHelper.arrayToLL([3, 8, 4]), LLHelper.arrayToLL([1, 5, 2]))
  )
);
