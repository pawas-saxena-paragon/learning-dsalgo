// https://leetcode.com/problems/unique-paths/?envType=list&envId=pm1gvxgg
export function uniquePaths(m: number, n: number): number {
  const sol = new Solution(m, n);
  return sol.numberOfWays;
}

export class Solution {
  numberOfWays: number;
  constructor(private nRows: number, private nCols: number) {
    this.numberOfWays = 0;
    this.dfs([0, 0]);
  }

  dfs([startx, starty]: [number, number]): void {
    if (startx > this.nCols - 1 || starty > this.nRows - 1) {
      return;
    }

    if (this.isDestination([startx, starty])) {
      this.numberOfWays++;
      return;
    }

    this.dfs([startx + 1, starty]);
    this.dfs([startx, starty + 1]);
  }

  isDestination([x, y]: [number, number]): boolean {
    return Boolean(x === this.nCols - 1 && y === this.nRows-1);
  }
}

/**
 * kind of like a matrix dfs in graphs
 * can move in only 2 dirs
 * are these ways unique ? looks unique
 */
