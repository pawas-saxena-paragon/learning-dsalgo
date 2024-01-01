import { numberConnectedComponents } from "./lc323.numberOfConnectedComponents";

describe("number of connected components", () => {
  it("n= 5, edges = [[0,1],[1,2],[3,4]]", () => {
    expect(
      numberConnectedComponents(5, [
        [0, 1],
        [1, 2],
        [3, 4],
      ])
    ).toEqual(2);
  });
});
