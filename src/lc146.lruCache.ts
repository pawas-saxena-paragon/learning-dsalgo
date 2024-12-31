// class ListNodeLc146 {
//   val: number;
//   next: ListNode | null;
//   constructor(val?: number, next?: ListNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.next = next === undefined ? null : next;
//   }
// }

// https://leetcode.com/problems/lru-cache/?envType=study-plan-v2&envId=top-interview-150
// class LRUCache {
//   cache: Record<number, number>;
//   start: ListNodeLc146 | null;
//   end: ListNodeLc146 | null;
//   currentCacheSize: number;
//   constructor(private capacity: number) {
//     this.cache = {};
//     this.start = null;
//     this.end = null;
//     this.currentCacheSize = 0;
//   }

//   get(key: number): number {
//     if (this.cache[key]) {
//       this.addNodeAtEnd(key);
//       return this.cache[key];
//     } else {
//       return -1;
//     }
//   }

//   addNodeAtEnd(key: number): void {
//     const newNode = new ListNodeLc146(key);
//     if (this.end === null) {
//       this.end = newNode;
//     } else {
//       this.end.next = newNode;
//       this.end = newNode;
//     }
//   }

//   removeNodeFromFront(): number {
//     if (this.start === null) {
//       return;
//     }
//     const evictedKey = this.start.val;
//     this.start = this.start.next;
//     return evictedKey;
//   }

//   put(key: number, value: number): void {
//     this.currentCacheSize++;
//     if (this.currentCacheSize >= this.capacity) {
//       const evictedKey = this.removeNodeFromFront();
//       delete this.cache[evictedKey];
//       this.currentCacheSize = this.capacity;
//     }
//     this.cache[key] = value;
//     this.addNodeAtEnd(key);
//   }
// }

//----------------------------------------------------
// the above is incorrect implementation. This requires use of doubly Linked list nodes along with map .
// The map will store Linked list nodes. Below is the soln from chatgpt

export class ListNode {
  key: number;
  val: number;
  prev: ListNode | null;
  next: ListNode | null;
  constructor(key: number, val: number) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  private capacity: number;
  private cache: Map<number, ListNode>;
  private head: ListNode;
  private tail: ListNode;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.cache = new Map();
    // Dummy head and tail nodes for easy pointer management
    this.head = new ListNode(0, 0);
    this.tail = new ListNode(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  get(key: number): number {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      this.moveToTail(node);
      return node.val;
    } else {
      return -1;
    }
  }

  put(key: number, value: number): void {
    if (this.cache.has(key)) {
      const node = this.cache.get(key)!;
      node.val = value;
      this.moveToTail(node);
    } else {
      const newNode = new ListNode(key, value);
      this.cache.set(key, newNode);
      this.addToTail(newNode);

      if (this.cache.size > this.capacity) {
        const evictedNode = this.removeFromHead();
        this.cache.delete(evictedNode.key);
      }
    }
  }

  private moveToTail(node: ListNode): void {
    this.removeNode(node);
    this.addToTail(node);
  }

  private addToTail(node: ListNode): void {
    node.prev = this.tail.prev;
    node.next = this.tail;
    this.tail.prev!.next = node;
    this.tail.prev = node;
  }

  private removeNode(node: ListNode): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }

  private removeFromHead(): ListNode {
    const node = this.head.next!;
    this.removeNode(node);
    return node;
  }
}
