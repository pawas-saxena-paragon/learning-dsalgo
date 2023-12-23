// https://leetcode.com/problems/unique-paths/?envType=list&envId=pm1gvxgg
export function uniquePaths(m: number, n: number): number {
  const sol = new Solution(m, n);
  return sol.dfs([0, 0]);
}

export class Solution {
  numberOfWays: number;
  dp: number[][];
  constructor(private nRows: number, private nCols: number) {
    this.dp = [];
    for (let i = 0; i < nRows + 1; i++) {
      const row = new Array(nCols + 1).fill(-1);
      this.dp.push(row);
    }
  }

  dfs([startx, starty]: [number, number]): number {
    if (startx > this.nRows - 1 || starty > this.nCols - 1) {
      return 0;
    }

    if (this.isDestination([startx, starty])) {
      return 1;
    }

    if (this.dp[startx][starty] !== -1) {
      return this.dp[startx][starty];
    }

    return (this.dp[startx][starty] =
      this.dfs([startx + 1, starty]) + this.dfs([startx, starty + 1]));
  }

  isDestination([x, y]: [number, number]): boolean {
    return Boolean(x === this.nRows - 1 && y === this.nCols - 1);
  }
}

/**
 * kind of like a matrix dfs in graphs
 * can move in only 2 dirs
 * are these ways unique ? looks unique
 *
 * this will count cells i think
 */
