// https://leetcode.com/problems/01-matrix/
type Point = [number, number];
const directions: Point[] = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

export function updateMatrix(mat: number[][]): number[][] {
  const nRows = mat.length;
  const nCol = mat[0].length;

  // initalize
  const resultMat: number[][] = Array(nRows).fill(null);
  for (let i = 0; i < nRows; i++) {
    const colMat = Array(nCol).fill(null);
    resultMat[i] = colMat;
  }

  for (let i = 0; i < nRows; i++) {
    for (let j = 0; j < nCol; j++) {
      if (mat[i][j] === 0) {
        resultMat[i][j] = 0;
      } else {
        bfs(i, j, resultMat);
      }
    }
  }

  return resultMat;
}

function bfs({
  point,
  resultMat,
  nRow,
  nCol,
  nextArr,
}: {
  point: Point;
  resultMat: number[][];
  nRow: number;
  nCol: number;
  nextArr: Point[];
}): void {
  const [i, j] = point;

  if (resultMat[i][j] !== null) {
    return;
  }

  const isOutOfBoundXDir = i < 0 || i >= nCol;
  const isOutOfBoundYDir = j < 0 || j >= nRow;
  if (isOutOfBoundXDir || isOutOfBoundYDir) {
    return;
  }

  const neighbourElements = directions.map(([diri, dirj]: Point) => {
    const nextEle: Point = [diri + i, dirj + j];
    return nextEle;
  });
  
  nextArr.push(...neighbourElements);

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
