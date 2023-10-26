import { removeElement } from "./removeElementInPlace";
describe("removeElementInPlace", () => {
  it("nums = [0,1,2,2,3,0,4,2], val = 2", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toEqual(5);
  });
  it("nums = [3,3,3,3], val = 3", () => {
    expect(removeElement([3,3,3,3], 3)).toEqual(0);
  });
});
