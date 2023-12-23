// does not work properly 
const EMPTY = -1;
class KnightsTour {
  board: number[][];
  boardSize: number;
  constructor(boardSize: number) {
    this.boardSize = boardSize;
    // init board
    this.board = [];
    for (let i = 0; i < boardSize; i++) {
      this.board[i] = [];

      for (let j = 0; j < boardSize; j++) {
        this.board[i][j] = EMPTY;
      }
    }
  }

  getNextMoves([row, col]: [number, number]): [number, number][] {
    const nextMoves: [number, number][] = [
      [row + 1, col + 2],
      [row - 1, col + 2],
      [row + 1, col - 2],
      [row - 1, col - 2],
      [row + 2, col + 1],
      [row + 2, col - 1],
      [row - 2, col + 1],
      [row - 2, col - 1],
    ];

    return nextMoves
      .filter(
        ([_row, _col]: [number, number]) =>
          _row > -1 &&
          _col > -1 &&
          _row < this.boardSize &&
          _col < this.boardSize
      )
      .filter(
        ([_row, _col]: [number, number]) => this.board[_row][_col] === EMPTY
      );
  }

  isBoardComplete(moveCount: number): boolean {
    return moveCount === this.boardSize * this.boardSize;

    // break when encountering any 0
    // if the sum of the board is 64(65)/2 == 32* 65
    for (let i = 0; i < this.boardSize; i++) {
      for (let j = 0; j < this.boardSize; j++) {
        if (this.board[i][j] === EMPTY) {
          return false;
        }
      }
    }
  }

  solveUntilAllSqaresAreVisited(
    currentRow: number,
    currentCol: number,
    moveCount: number
  ): boolean {
    if (this.isBoardComplete(moveCount)) {
      return true;
    }

    const nextMoves = this.getNextMoves([currentRow, currentCol]);

    // console.log('next moves', currentRow, currentCol, nextMoves);
    for (let [nextRow, nextCol] of nextMoves) {
      this.board[nextRow][nextCol] = moveCount + 1;
      if (this.solveUntilAllSqaresAreVisited(nextRow, nextCol, moveCount + 1)) {
        return true;
      } else {
        // soln not possible
        // backtrack
        this.board[nextRow][nextCol] = EMPTY;
      }
    }

    return false;
  }

  printBoard() {
    this.board.forEach((row: number[]) => {
      console.log(JSON.stringify(row));
    });
  }
}

const p = new KnightsTour(8);
p.solveUntilAllSqaresAreVisited(0, 0, 1);
console.log("board solved");
p.printBoard();
