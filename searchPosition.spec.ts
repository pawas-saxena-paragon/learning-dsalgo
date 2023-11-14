import { searchInsert } from "./searchPosition";
describe("searchPosition", () => {
  it("[1,3,5,6] target = 5", () => {
    expect(searchInsert([1, 3, 5, 6], 5)).toEqual(2);

  });

  it("[1,3,5,6] target = 2", () => {
    expect(searchInsert([1, 3, 5, 6], 2)).toEqual(1);
  
  });

  it("[1,3,5,6] target = 7", () => {
    expect(searchInsert([1, 3, 5, 6], 7)).toEqual(4);
  });

  it("[1,3,5,6] target = 0", () => {
    expect(searchInsert([1, 3, 5, 6], 0)).toEqual(0);
  });
});
