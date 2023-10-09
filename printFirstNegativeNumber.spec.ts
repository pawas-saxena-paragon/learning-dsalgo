import { printFirstNegativeInteger } from "./printFirstNegativeNumber";

describe("printFirstNegativeInteger", () => {
  it("N = 5 ,A[] = {-8, 2, 3, -6, 10} , K = 2", () => {
    expect(printFirstNegativeInteger(5, 2, [-8, 2, 3, -6, 10])).toEqual([
      -8, 0, -6, -6,
    ]);
  });

  it("N = 8 ,A[] =  {12, -1, -7, 8, -15, 30, 16, 28} , K = 3", () => {
    expect(
      printFirstNegativeInteger(8, 3, [12, -1, -7, 8, -15, 30, 16, 28])
    ).toEqual([-1, -1, -7, -15, -15, 0]);
  });
});
