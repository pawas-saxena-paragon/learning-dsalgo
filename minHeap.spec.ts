import { MinHeap } from "./minHeap";

describe("MinHeap", () => {
  it("should perform min operations", () => {
    const minHeap = new MinHeap();
    minHeap.insert(10);
    minHeap.insert(5);
    minHeap.insert(15);
    minHeap.insert(8);
    minHeap.insert(20);

    expect(minHeap.size()).toEqual(5);
    expect(minHeap.peek()).toEqual(5);
    expect(minHeap.extractMin()).toEqual(5);
    expect(minHeap.size()).toEqual(4);
  });
});
