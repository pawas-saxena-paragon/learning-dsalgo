import { isHappy } from "./lc206.happyNumber";

describe("Happy Number", () => {
  it("2", () => {
    expect(isHappy(2)).toEqual(false);
  });
  it("19", () => {
    expect(isHappy(19)).toEqual(true);
  });

  it("10", () => {
    expect(isHappy(10)).toEqual(true);
  });
});
