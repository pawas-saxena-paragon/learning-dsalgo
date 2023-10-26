import { solveNQueens } from "./nQueen";

describe("solveNQueen", () => {
  it("n=4", () => {
    expect(solveNQueens(4)).toEqual([
      [".Q..", "...Q", "Q...", "..Q."],
      ["..Q.", "Q...", "...Q", ".Q.."],
    ]);
  });

  it("n = 1", () => {
    expect(solveNQueens(1)).toEqual([["Q"]]);
  });
});
