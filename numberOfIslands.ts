// https://leetcode.com/problems/number-of-islands/?envType=study-plan-v2&envId=top-interview-150
export function numIslands(grid: string[][]): number {
  const numIslands = new NumIslands(grid);
  numIslands.solve();

  return numIslands.islands.length;
}

type Point = [number, number];
type Island = Point[];

class NumIslands {
  Nx: number;
  Ny: number;
  islands: Island[];

  constructor(private gird: string[][]) {
    this.Nx = this.gird[0].length;
    this.Ny = this.gird.length;
    this.islands = [];
  }

  getNextMoves(x: number, y: number): Point[] {
    const allPossibleNextMoves: Point[] = [
      [x + 1, y],
      [x - 1, y],
      [x, y + 1],
      [x, y - 1],
      // [x + 1, y + 1],
      // [x + 1, y - 1],
      // [x - 1, y + 1],
      // [x - 1, y - 1],
    ];

    return allPossibleNextMoves.filter(
      ([x, y]: Point) =>
        x >= 0 &&
        x < this.Nx &&
        y >= 0 &&
        y < this.Ny &&
        this.gird[x][y] === "1"
    );
  }

  searchInFoundIslands(x: number, y: number): boolean {
    const foundIsland = this.islands.find((island: Island) => {
      return island.find(([_x, _y]: Point) => _x === x && _y === y);
    });

    return Boolean(foundIsland);
  }

  findLandNode([x, y]: Point = [0, 0]): Point | null {
    for (let i = x; i < this.Nx; i++) {
      for (let j = y; i < this.Ny; j++) {
        if (
          this.gird[i][j] === "1" &&
          this.searchInFoundIslands(i, j) === false
        ) {
          return [i, j];
        }
      }
    }

    return null;
  }

  /**
   * 
   * @param param0 this function runs on forever
   * @returns 
   */
  solveForOneIsland([x, y]: Point): Island {
    const island: Island = [];
    const nextMoves: Point[] = [this.findLandNode([x, y])];
    while (nextMoves.length) {
      console.log("nextMoves", nextMoves.length);
      const newLandNode = nextMoves.shift();
      island.push(newLandNode);

      const _next = this.getNextMoves(newLandNode[0], newLandNode[1]);
      _next.filter(
        ([_x, _y]: Point) =>
          nextMoves.find(([x1, y1]) => _x === x1 && _y === y1) === undefined
      );
      nextMoves.push(..._next);
    }

    return island;
  }

  solve(): void {
    let [startx, starty]: Point = [-1, 0];
    // let landNode = this.findLandNode([startx, starty]);

    let landNode = null;
    do {
      if (startx < this.Nx) {
        startx++;
      } else {
        starty++;
      }
      console.log("solving fir", [startx, starty]);

      landNode = this.findLandNode([startx, starty]);
      this.islands.push(this.solveForOneIsland(landNode));
    } while (landNode);
  }
}
