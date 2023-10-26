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

  // since we are placing the queen in a row and starting from the first row, the height of the board will decrease
  // using the height variable we will place the queen in a row in a loop
  //    we will place the queen in a available column starting from left to right 
  //    for each col we will check if the col is safe 
  //    if the col is not safe we move to next col
  //    if the col is safe we will place the queen in the col and reduce the height and call the solve fn again 
  //    if the solve fn returns a value I will add the board to the results 
  //    the board is the shared variable and its value will keep on changing 
  //    but we are moving one col at a time within a row. We are moving sequentially so it will not be an issue
  //    I will have to clear the board before proceeding to the next safe column
  //    If the solve fn returns a  null value then I will backtrack and move to next column. Also clear the board for a height 
  
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
