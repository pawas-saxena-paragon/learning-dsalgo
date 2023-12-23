import { alternatively } from "./lc54.spiralMatirx";

describe("spiral matrix", () => {
  it("alternative index 1", () => {
    const get = alternatively(0, 7);
    const result = [];
    for (let i = 0; i <= 7; i++) {
      result.push(get());
    }

    expect(result).toEqual([0, 7, 1, 6, 2, 5, 3, 4]);
  });

  it("alternative index 2", () => {
    const get = alternatively(0, 8);
    const result = [];
    for (let i = 0; i <= 8; i++) {
      result.push(get());
    }

    expect(result).toEqual([0, 8, 1, 7, 2, 6, 3, 5, 4]);
  });
});
