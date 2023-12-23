import { find3way as findMin } from "./findMinimum3waySearch";
describe("findMinimum3waySearch", () => {
  it("arr = [1,2,3,4,5,6]", () => {
    expect(findMin([1, 2, 3, 4, 5, 6], 0, 5)).toEqual(1);
  });

  it("arr = [6,5,4,3,2,1]", () => {
    expect(findMin([6, 5, 4, 3, 2, 1], 0, 5)).toEqual(1);
  });
});
