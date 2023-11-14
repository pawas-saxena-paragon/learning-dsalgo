// https://leetcode.com/problems/surrounded-regions/
function solve(board: string[][]): void {
  const s = new SurroundedRegions(board);
  s.solve();
}

class SurroundedRegions {
  constructor(private board: string[][]) {}

  dfs(x: number, y: number) {
    if (
      x < 0 ||
      x >= this.board.length ||
      y < 0 ||
      y >= this.board[0].length ||
      this.board[x][y] !== "O"
    ) {
      return;
    }

    this.board[x][y] = "#";

    this.dfs(x + 1, y);
    this.dfs(x - 1, y);
    this.dfs(x, y + 1);
    this.dfs(x, y - 1);
  }

  solve() {
    const nRows = this.board.length;
    const nColumns = this.board[0].length;
    // traverse all edge lying regions
    for (let j = 0; j < nColumns; j++) {
      // 0th row
      if (this.board[0][j] === "O") {
        this.dfs(0, j);
      }

      // last row
      if (this.board[nRows - 1][j] === "O") {
        this.dfs(nRows - 1, j);
      }
    }

    for (let i = 0; i < nRows; i++) {
      // 0 th column
      if (this.board[i][0] === "O") {
        this.dfs(i, 0);
      }

      // last column
      if (this.board[i][nColumns - 1] === "O") {
        this.dfs(i, nColumns - 1);
      }
    }

    // another traversal is not required

    for (let i = 0; i < nRows; i++) {
      for (let j = 0; j < nColumns; j++) {
        if (this.board[i][j] === "O") {
          this.board[i][j] = "X";
        }

        if (this.board[i][j] === "#") {
          this.board[i][j] = "O";
        }
      }
    }
  }
}
