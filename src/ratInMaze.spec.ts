import { RatMaze } from "./ratInMaze";
describe("RatInMaze", () => {
  it(`
    [
        [1, 0, 0, 0],
        [1, 1, 0, 1],
        [1, 1, 0, 0],
        [0, 1, 1, 1],
      ] n =4
    `, () => {
    const maze = [
      [1, 0, 0, 0],
      [1, 1, 0, 1],
      [1, 1, 0, 0],
      [0, 1, 1, 1],
    ];
    const rm = new RatMaze(maze, 4);
    rm.solve(0, 0);
    expect(rm.solution.join("")).toEqual("DDRDRR");
  });

  it(`
   [
      [1, 0],
      [1, 1],
    ] n =2
  `, () => {
    const maze = [
      [1, 0],
      [1, 1],
    ];
    const rm = new RatMaze(maze, 2);
    rm.solve(0, 0);
    expect(rm.solution.join("")).toEqual("DR");
  });
});
