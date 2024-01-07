import { exist } from "./lc79.wordSearch";

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
  ["A", "D", "E", "E"],
];

const board1 = [
  ["A", "B", "C", "E"],
  ["S", "F", "E", "S"],
  ["A", "D", "E", "E"],
];

describe("wordSearch", () => {
  it("ABCCED", () => {
    expect(exist(board, "ABCCED")).toEqual(true);
  });

  it("SEE", () => {
    expect(exist(board, "SEE")).toEqual(true);
  });

  it("ABCB", () => {
    expect(exist(board, "ABCB")).toEqual(false);
  });

  it('[["a"]], word = "ab"', () => {
    expect(exist([["a"]], "ab")).toEqual(false);
  });

  it('[["a"]], a', () => {
    expect(exist([["a"]], "a")).toEqual(true);
  });

  it('"ABCESEEEFS"', () => {
    expect(exist(board1, "ABCESEEEFS")).toEqual(true);
  });
});
