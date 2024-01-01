import { generateAdjList } from "./graph.utils";

describe("graph utils", () => {
  describe("#generateAdjacencyList", () => {
    it("[[0,1],[1,2],[2,0]]", () => {
      expect(
        generateAdjList([
          [0, 1],
          [1, 2],
          [2, 0],
        ])
      ).toEqual({
        0: [1, 2],
        1: [0, 2],
        2: [1, 0],
      });
    });
  });
});
