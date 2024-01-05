// https://leetcode.com/problems/01-matrix/
type Point = [number, number];
type PointLevel = [number, number, number];

export function updateMatrix(mat: number[][]): number[][] {
  const sol = new Solution(mat);
  console.log("Result", sol.result);
  return sol.result;
}

class Solution {
  result: number[][];
  visited: boolean[][];
  nRow: number;
  nCol: number;
  directions: Point[];

  constructor(private inputMat: number[][]) {
    this.nRow = this.inputMat.length;
    this.nCol = this.inputMat[0].length;
    this.directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];
    this.initVisited();
    this.initResult();
    this.solve();
  }

  initResult() {
    this.result = Array(this.nRow).fill(null);
    for (let i = 0; i < this.nRow; i++) {
      const colMat = Array(this.nCol).fill(null);
      for (let j = 0; j < this.nCol; j++) {
        colMat[j] = this.inputMat[i][j] === 0 ? 0 : null;
      }
      this.result[i] = colMat;
    }
  }

  initVisited() {
    this.visited = Array(this.nRow).fill(null);
    for (let i = 0; i < this.nRow; i++) {
      const colMat: boolean[] = Array(this.nCol).fill(false);
      for (let j = 0; j < this.nCol; j++) {
        colMat[j] = Boolean(this.inputMat[i][j] === 0);
      }
      this.visited[i] = colMat;
    }
  }

  solve() {
    for (let i = 0; i < this.nRow; i++) {
      for (let j = 0; j < this.nCol; j++) {
        if (this.inputMat[i][j] === 0) {
          this.bfs(i, j, 0);
        }
      }
    }
  }

  bfs(starti: number, startj: number, startLevel: number): void {
    const toVisitNext: PointLevel[] = [[starti, startj, startLevel]];
    while (toVisitNext.length !== 0) {
      const [i, j, currentLevel] = toVisitNext.shift();
      this.visited[i][j] = true;

      if (this.inputMat[i][j] === 1) {
        this.result[i][j] = currentLevel;
      }

      const nextNodes = this.getNext(i, j, currentLevel);
      console.log(`tovisit ${i}: ${j}:`, nextNodes);
      toVisitNext.push(...nextNodes);
    }
  }

  getNext(i: number, j: number, level: number): PointLevel[] {
    return this.directions
      .map(([diri, dirj]: Point) => {
        const nextPoint: PointLevel = [
          diri + i,
          dirj + j,
          this.inputMat[i][j] === 0 ? 0 : level + 1,
        ];
        return nextPoint;
      })
      .filter(([i, j]: PointLevel) => !this.isOutOfBound(i, j))
      .filter(([i, j]: PointLevel) => !this.visited[i][j]);
  }

  isOutOfBound(i: number, j: number): boolean {
    const isOutOfBoundXDir = j < 0 || j >= this.nCol;
    const isOutOfBoundYDir = i < 0 || i >= this.nRow;
    return Boolean(isOutOfBoundXDir || isOutOfBoundYDir);
  }
}

/**
 * mark all the zero elements in the input as something we dont have to start with
 * each 1 will have a result value of at least 1
 * can move in 4 directions
 * if i use recursion here it will become dfs.
 * in orde to make it bfs I have to maintain a next arr
 * looping over each element from nextArr and adding elements in the process
 * how do i find the result value for current element . It is the Min(...resultValueOfNeighbours)
 * but the result value of neighbours is not known at this time
 *
 * bfs fucntion will have a check for the next element is zero and will stop its execution after that
 */
