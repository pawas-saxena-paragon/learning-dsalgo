import { exist } from "./lc79.wordSearch";

const board = [
  ["A", "B", "C", "E"],
  ["S", "F", "C", "S"],
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
});
