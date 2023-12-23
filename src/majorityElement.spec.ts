import { majorityElement } from "./majorityElement";
describe("majorityElement", () => {
  it("nums = [3,2,3]", () => {
    expect(majorityElement([3, 2, 3])).toEqual(3);
  });

  it("nums = [2,2,1,1,1,2,2]", () => {
    expect(majorityElement([2, 2, 1, 1, 1, 2, 2])).toEqual(2);
  });
});
