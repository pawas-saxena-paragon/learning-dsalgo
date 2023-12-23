import { rob } from "./houseRobber";

describe("house robber", () => {
  it("lc test 1 [1,2,3,1]", () => {
    expect(rob([1, 2, 3, 1])).toEqual(4);
  });

  it("lc test 2 [2,7,9,3,1]", () => {
    expect(rob([2, 7, 9, 3, 1])).toEqual(12);
  });
});
