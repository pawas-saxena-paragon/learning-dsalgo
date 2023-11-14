// https://leetcode.com/problems/surrounded-regions/
function solve(board: string[][]): void {
  const s = new SurroundedRegions(board);
  s.solve();
}

class SurroundedRegions {
  isEdgeRegion: boolean;
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

    const isEdgeNode =
      x === 0 ||
      x === this.board.length - 1 ||
      y === 0 ||
      y === this.board[0].length;
    if (isEdgeNode) {
      this.isEdgeRegion = true;
    }

    if (!this.isEdgeRegion) {
      this.board[x][y] = "#";
    }

    this.dfs(x + 1, y);
    this.dfs(x - 1, y);
    this.dfs(x, y + 1);
    this.dfs(x, y - 1);
  }

  solve() {
    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        if (this.board[i][j] === "O") {
          this.dfs(i, j);
          this.isEdgeRegion = false;
        }
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      for (let j = 0; j < this.board[0].length; j++) {
        if (this.board[i][j] === "#") {
          this.board[i][j] = "X";
        }
      }
    }
  }
}
