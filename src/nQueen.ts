// chatgpt code
class NQueens {
  private board: number[][];
  private solutions: number[][][];

  constructor(private N: number) {
    this.board = new Array(N);
    for (let i = 0; i < N; i++) {
      this.board[i] = new Array(N).fill(0);
    }
    this.solutions = [];
  }

  solveNQueens(): number[][][] {
    this.placeQueens(0);
    return this.solutions;
  }

  placeQueens(row: number): void {
    if (row === this.N) {
      const solution: number[][] = [];
      for (let i = 0; i < this.N; i++) {
        solution.push([...this.board[i]]);
      }
      this.solutions.push(solution);
      return;
    }

    for (let col = 0; col < this.N; col++) {
      if (this.isSafe(row, col)) {
        this.board[row][col] = 1;
        this.placeQueens(row + 1);
        this.board[row][col] = 0;
      }
    }
  }

  isSafe(row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
      if (this.board[i][col] === 1) {
        return false; // Check column
      }

      if (col - row + i >= 0 && this.board[i][col - row + i] === 1) {
        return false; // Check left diagonal
      }

      if (col + row - i < this.N && this.board[i][col + row - i] === 1) {
        return false; // Check right diagonal
      }
    }

    return true;
  }
}

// Example usage:
const n = 4; // Change this to the desired N value
const nQueens = new NQueens(n);
const solutions = nQueens.solveNQueens();
solutions.forEach((solution, index) => {
  console.log(`Solution ${index + 1}:`);
  solution.forEach(row => {
    console.log(row.map(cell => (cell === 1 ? 'Q' : '.')).join(' '));
  });
  console.log('\n');
});
