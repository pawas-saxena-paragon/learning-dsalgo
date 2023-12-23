// https://leetcode.com/problems/number-of-islands/?envType=study-plan-v2&envId=top-interview-150
export function numIslands(grid: string[][]): number {
  const numIslands = new NumIslands(grid);
  numIslands.solve();

  return numIslands.count;
}

type Point = [number, number];

class NumIslands {
  Nx: number;
  Ny: number;
  count: number;

  constructor(private grid: string[][]) {
    this.Nx = this.grid.length;
    this.Ny = this.grid[0].length;
    this.count = 0;
  }

  solve() {
    for (let i = 0; i < this.Nx; i++) {
      for (let j = 0; j < this.Ny; j++) {
        if (this.grid[i][j] === "1") {
          // travese and set 0 an island
          this.dfs([i, j]);
          this.count++;
        }
      }
    }
  }

  /**
   * traverses 1 island to all boundaries and change visited nodes back to '0'
   */
  dfs([x, y]: Point): void {
    if (
      x < 0 ||
      x >= this.Nx ||
      y < 0 ||
      y >= this.Ny ||
      this.grid[x][y] === "0"
    ) {
      return;
    }

    this.grid[x][y] = "0";

    this.dfs([x + 1, y]);
    this.dfs([x - 1, y]);
    this.dfs([x, y + 1]);
    this.dfs([x, y - 1]);
  }
}
