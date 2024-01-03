import { updateMatrix } from "./lc542.01Matrix";

describe("01 Matrix", () => {
  it("[[0,0,0],[0,1,0],[0,0,0]]", () => {
    expect(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [0, 0, 0],
      ])
    ).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ]);
  });

  it("[[0,0,0],[0,1,0],[1,1,1]]", () => {
    expect(
      updateMatrix([
        [0, 0, 0],
        [0, 1, 0],
        [1, 1, 1],
      ])
    ).toEqual([
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1],
    ]);
  });
});
