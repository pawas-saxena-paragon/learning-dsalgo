import { MaxHeap } from "./maxHeap";

describe("MaxHeap", () => {
  it("should perform min operations", () => {
    const maxHeap = new MaxHeap();
    maxHeap.insert(10);
    maxHeap.insert(5);
    maxHeap.insert(15);
    maxHeap.insert(8);
    maxHeap.insert(20);

    expect(maxHeap.size()).toEqual(5);
    expect(maxHeap.peek()).toEqual(20);
    expect(maxHeap.extractMax()).toEqual(20);
    expect(maxHeap.size()).toEqual(4);
  });
});
