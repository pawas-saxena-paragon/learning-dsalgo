import { merge } from "./merge2SortedArray";
describe("merge2sortedArray", () => {
  it("nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3", () => {
    const arr1 =[1, 2, 3, 0, 0, 0]; 
    merge(arr1, 3, [2, 5, 6], 3);
    expect(arr1).toEqual([
      1, 2, 2, 3, 5, 6,
    ]);
  });
});
