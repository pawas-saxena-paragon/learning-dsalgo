import { getPrefixArr, getSuffixArr, productExceptSelf } from "./lc_238.productOfArrExceptSelf";

describe("productOfArrExceptSelf", () => {
  describe("#getPrefixArr", () => {
    it("[1,2,3,4]", () => {
      expect(getPrefixArr([1, 2, 3, 4])).toEqual([1, 1, 2, 6]);
    });
  });

  describe("#getSuffixArr", () => {
    it("[1,2,3,4]", () => {
      expect(getSuffixArr([1, 2, 3, 4])).toEqual([24, 12, 4, 1]);
    });
  });

  it("[1,2,3,4]", () => {
    expect(productExceptSelf([1, 2, 3, 4])).toEqual([24, 12, 8, 6]);
  });
});
