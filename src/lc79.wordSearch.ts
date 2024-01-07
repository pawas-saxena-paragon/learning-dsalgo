// https://leetcode.com/problems/word-search/?envType=study-plan-v2&envId=top-interview-150
export function exist(board: string[][], word: string): boolean {
  const sol = new Solution(board, word);
  return sol.solve();
}

/**
 * [rowNum, colNum]
 * this is not same as caretisan coordinates as there [x, y] represents [colNum, rowNum]
 */
type Point = [number, number];

class Solution {
  nRow: number;
  nCol: number;
  directions: Point[];
  startPoint: Point[];

  constructor(private board: string[][], private word: string) {
    this.nRow = this.board.length;
    this.nCol = this.board[0].length;
    this.startPoint = [];
    this.directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    this.initStartPoint();
  }

  /**
   *
   * @param rowNum i is the row num. Outer loop
   * @param colNum j is the col num. inner loop
   */
  isOutBound(rowNum: number, colNum: number): boolean {
    return Boolean(
      rowNum < 0 || rowNum >= this.nRow || colNum < 0 || colNum >= this.nCol
    );
  }

  initStartPoint(): void {
    for (let i = 0; i < this.nRow; i++) {
      for (let j = 0; j < this.nCol; j++) {
        if (this.board[i][j] === this.word.charAt(0)) {
          // word is at least length 1 as per the constraints
          this.startPoint.push([i, j]);
        }
      }
    }
  }

  dfs(
    rowNum: number,
    colNum: number,
    _word: string,
    _visited: Point[]
  ): boolean {
    console.log(
      "-----------------------",
      `curretn ${rowNum}${colNum}`,
      this.board[rowNum][colNum],
      'cuurentWord',
      _word,
      "visited",
      _visited.map(([i, j]: Point) => this.board[i][j]).join("")
    );

    if (_word.length === 0) {
      return true;
    }
    if (this.board[rowNum][colNum] !== _word.charAt(0)) {
      return false;
    }

    const nextCells: Point[] = this.directions
      .map(([diri, dirj]: Point) => [rowNum + diri, colNum + dirj] as Point)
      .filter(([ni, nj]: Point) => !this.isOutBound(ni, nj))
      .filter(
        ([ni, nj]: Point) =>
          !Boolean(_visited.find(([vi, vj]: Point) => vi === ni && vj === nj))
      );

    _visited.push([rowNum, colNum]);

    if (nextCells.length === 0) {
      return (
        this.board[rowNum][colNum] === _word.charAt(0) && _word.length === 1
      );
    }

    return nextCells
      .map(([ni, nj]: Point) => {
        return this.dfs(
          ni,
          nj,
          _word.length === 1 ? "" : _word.slice(1),
          _visited.slice()
        );
      })
      .reduce((acc: boolean, curr: boolean) => {
        return acc || curr;
      });
  }

  solve(): boolean {
    if (this.startPoint.length === 0) {
      return false;
    }

    for (let [si, sj] of this.startPoint) {
      const isFound = this.dfs(si, sj, this.word, []);
      if (isFound === true) {
        return true;
      }
    }

    return false;
  }
}

/**
 * when the word arr becomes empty then we have found the soln.
 * find potential start points.
 * then traverse each start point for the soln.
 */
