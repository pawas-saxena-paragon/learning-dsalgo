import { reverse } from "./reverseArray";

describe("reverseArray", () => {
  it("nums = [1,2,3,4,5]", () => {
    const input = [1, 2, 3, 4, 5];
    reverse(input);
    expect(input).toEqual([5, 4, 3, 2, 1]);
  });

  it("nums = [10,11, 12, 13]", () => {
    const input = [10, 11, 12, 13];
    reverse(input);
    expect(input).toEqual([13, 12, 11, 10]);
  });

  it("nums = [1,2,3,4,5], start = 0, end = 2", () => {
    const input = [1, 2, 3, 4, 5];
    reverse(input, 0, 2);
    expect(input).toEqual([3, 2, 1, 4, 5]);
  });
});
