import { convert } from "./lc6.zigzagConversion";

describe("zigZagConversion", () => {
  it("PAYPALISHIRING, rows=3", () => {
    expect(convert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
  });

  it("PAYPALISHIRING, rows=4", () => {
    expect(convert("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
  });

  it("A, numRows = 1", () => {
    expect(convert("A", 1)).toEqual("A");
  });

  it('AB', ()=>{
    expect(convert('AB', 1)).toEqual('AB');
  });
});
