import {
  padSmallerStringWithZero,
  decimalToBinary,
  binaryToDecimal,
} from "./lc67.addBinary";
describe("addBinary", () => {
  it('padSmallerStringWithZero , "11" , "1"', () => {
    expect(padSmallerStringWithZero("11", "1")).toEqual(["01", "11"]);
  });

  it("decimalToBinary 3", () => {
    expect(decimalToBinary(3)).toEqual("11");
  });

  it("decimalToBinary -3", () => {
    expect(decimalToBinary(3)).toEqual("11");
  });

  it("binaryToDecimal 11", () => {
    expect(binaryToDecimal("11")).toEqual("3");
  });
});
