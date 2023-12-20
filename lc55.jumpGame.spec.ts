import { canJump } from "./lc55.jumpGame";

describe("jumpGame", () => {
  it("[2,0,0]", () => {
    expect(canJump([2, 0, 0])).toEqual(true);
  });
  it("[3,0,8,2,0,0,1]", () => {
    expect(canJump([3, 0, 8, 2, 0, 0, 1])).toEqual(true);
  });
});
