// https://leetcode.com/problems/n-queens/
// incomplete code. unable to solve this so moving on
export function solveNQueens(n: number): string[][] {
  // explore all paths
  // rowCheck = no two queens are on the same row
  // colCheck = no two queens are on the same row
  // diagonal check = no two queens are on the same diagonal
  // isSafe = rowCheck && colCheck && diagonalCheck
  // will place queens on new col and no two queen in the same row and later check the bounding fn on the diagonal condn

  const row = Array(n).fill(0);
  const board: number[][] = Array(n).fill(row);

  //placing the queen at 0,0
  solve(n, board, [n, n]);
}

function solve(
  n: number,
  board: number[][],
  [width, height]: [number, number]
): number[][] | null {
  if (n === 0) {
    // no queens to place so return the board
    return board;
  } else if (n === 1 && width === 1 && height === 1) {
    return [[1]];
  } else {
    // place the queen in some cell and check the safety condition
    for (let i = 0; i < width; i++) {
      
    }
  }
}

/**
 * cover all cells and check for safety condition
 * move diagonally can perform optimization
 * optimize so that the same cell is not checked again and again
 * @param board
 */
function isSafe(board: number[][]) {}

function stringifySoln(board: number[][]): string[] {
  return board.map((val: number[]) =>
    val.map((cellVal: number) => (cellVal === 1 ? "Q" : ".")).join("")
  );
}
