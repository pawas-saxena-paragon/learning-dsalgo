//generated from chatgpt
export class MinHeap {
  private heap: number[];

  constructor() {
    this.heap = [];
  }

  // Helper function to get the parent index of a given index
  private getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  // Helper function to get the left child index of a given index
  private getLeftChildIndex(index: number): number {
    return 2 * index + 1;
  }

  // Helper function to get the right child index of a given index
  private getRightChildIndex(index: number): number {
    return 2 * index + 2;
  }

  // Helper function to swap two elements in the heap
  private swap(index1: number, index2: number): void {
    const temp = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = temp;
  }

  // Function to insert a value into the Min Heap
  insert(value: number): void {
    this.heap.push(value);
    this.heapifyUp();
  }

  // Helper function to fix the Min Heap property upwards
  private heapifyUp(): void {
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] < this.heap[this.getParentIndex(currentIndex)]
    ) {
      this.swap(currentIndex, this.getParentIndex(currentIndex));
      currentIndex = this.getParentIndex(currentIndex);
    }
  }

  // Function to extract the minimum value (root) from the Min Heap
  extractMin(): number | null {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop() || null;
    }

    const min = this.heap[0];
    this.heap[0] = this.heap.pop() as number;
    this.heapifyDown(0);
    return min;
  }

  // Helper function to fix the Min Heap property downwards
  private heapifyDown(index: number): void {
    const leftChildIndex = this.getLeftChildIndex(index);
    const rightChildIndex = this.getRightChildIndex(index);
    let smallest = index;

    if (
      leftChildIndex < this.heap.length &&
      this.heap[leftChildIndex] < this.heap[smallest]
    ) {
      smallest = leftChildIndex;
    }

    if (
      rightChildIndex < this.heap.length &&
      this.heap[rightChildIndex] < this.heap[smallest]
    ) {
      smallest = rightChildIndex;
    }

    if (index !== smallest) {
      this.swap(index, smallest);
      this.heapifyDown(smallest);
    }
  }

  // Function to get the minimum value without removing it
  peek(): number | null {
    if (this.heap.length === 0) {
      return null;
    }
    return this.heap[0];
  }

  // Function to get the size of the Min Heap
  size(): number {
    return this.heap.length;
  }
}
