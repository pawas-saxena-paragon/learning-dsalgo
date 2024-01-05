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
  toVisit: PointLevel[];
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
    this.toVisit = [];
    this.addZerosToVisit();
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

  addZerosToVisit() {
    for (let i = 0; i < this.nRow; i++) {
      for (let j = 0; j < this.nCol; j++) {
        if (this.inputMat[i][j] === 0) {
          this.toVisit.push([i, j, 0]);
        }
      }
    }
  }

  solve() {
    this.bfs();
  }

  bfs(): void {
    while (this.toVisit.length !== 0) {
      const [i, j, currentLevel] = this.toVisit.shift();
      // this.result[i][j] = true;

      if (this.inputMat[i][j] === 1) {
        this.result[i][j] = currentLevel; // when coming from 0 and encountering a 1 we should increase it by 1
        // return;
        // by adding a return here , code will not be able to reach 1 nodes that are surrounded by 1 in all directions
      }

      const nextNodes = this.getNext(i, j, currentLevel);
      // the order of ${i} ${j} in this log tell the order of traversal in graph
      // console.log(
      //   `tovisit ${i}: ${j}:`,
      //   nextNodes,
      //   "resultTillNow",
      //   this.result
      // );

      this.toVisit.push(...nextNodes);
    }
  }

  getNext(i: number, j: number, prevLevel: number): PointLevel[] {
    return this.directions
      .map(([diri, dirj]: Point) => [diri + i, dirj + j] )
      .filter(([i, j]: Point) => !this.isOutOfBound(i, j))
      .filter(([i, j]: Point) => this.result[i][j] === null)
      .map(([nexti, nextj]: Point) => [
        nexti,
        nextj,
        this.inputMat[nexti][nextj] === 0 ? 0 : prevLevel + 1,
      ]);
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
