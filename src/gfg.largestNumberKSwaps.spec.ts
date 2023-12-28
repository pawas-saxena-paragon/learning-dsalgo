import { Solution } from "./gfg.largestNumberKSwaps";

describe("largest number k swaps", () => {
  it("1234567 , k =4", () => {
    expect(new Solution().findMaximumNum("1234567", 4)).toEqual("7654321");
  });

  it("3435335 , k =3", () => {
    expect(new Solution().findMaximumNum("3435335", 3)).toEqual("5543333");
  });

  it("4551711527 , k =3", () => {
    expect(new Solution().findMaximumNum("4551711527", 3)).toEqual("7755511124");
  });
});
