import { intToRoman } from "./lc12.integerToRoman";

describe("intToRoman", () => {
  it("3", () => {
    expect(intToRoman(3)).toEqual("III");
  });

  it("58", () => {
    expect(intToRoman(58)).toEqual("LVIII");
  });

  it("1994", () => {
    expect(intToRoman(1994)).toEqual("MCMXCIV");
  });

  it("10", () => {
    expect(intToRoman(10)).toEqual("X");
  });
});
