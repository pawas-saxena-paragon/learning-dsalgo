import { reverseStack } from "./reverseStack";
describe("reverse stack", () => {
  it("[1,2,3,4,5,6]", () => {
    expect(reverseStack([1, 2, 3, 4, 5, 6])).toEqual([6, 5, 4, 3, 2, 1]);
  });
});
