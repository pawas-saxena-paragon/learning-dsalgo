// https://leetcode.com/problems/01-matrix/
type Point = [number, number];
type PointLevel = [number, number, number];
const directions: Point[] = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

export function updateMatrix(mat: number[][]): number[][] {
  const nRow = mat.length;
  const nCol = mat[0].length;

  // initalize result matrix
  const resultMat: number[][] = Array(nRow).fill(null);
  for (let i = 0; i < nRow; i++) {
    const colMat = Array(nCol).fill(null);
    resultMat[i] = colMat;
  }

  for (let i = 0; i < nRow; i++) {
    for (let j = 0; j < nCol; j++) {
      if (mat[i][j] === 0) {
        resultMat[i][j] = 0;
      }
    }
  }

  for (let i = 0; i < nRow; i++) {
    for (let j = 0; j < nCol; j++) {
      if (resultMat[i][j] === null) {
        // set for each element as start
        // bfs({
        //   point: [i, j],
        //   resultMat,
        //   nRow,
        //   nCol,
        //   inputMat: mat,
        // });

        bfsRec({ point: [i, j, 0], resultMat, nRow, nCol });
      }
    }
  }

  console.log("result mat", resultMat);

  return resultMat;
}

function bfs({
  point,
  resultMat,
  nRow,
  nCol,
  inputMat,
}: {
  point: Point;
  resultMat: number[][];
  nRow: number;
  nCol: number;
  inputMat: number[][];
}): void {
  const [starti, startj] = point;
  const toVisitNext: PointLevel[] = [[starti, startj, 0]];
  const visited: Point[] = [[starti, startj]];
  while (toVisitNext.length !== 0) {
    const currentNode: PointLevel = toVisitNext.shift();
    const [i, j, currentLevel] = currentNode;

    if (isOutOfBound(i, j, nRow, nCol)) {
      continue;
    }

    //visit current element
    if (inputMat[i][j] === 0) {
      resultMat[i][j] = currentLevel;
      return;
    }

    if (resultMat[i][j] !== null) {
      resultMat[starti][startj] = currentLevel + resultMat[i][j];
      return;
    }

    const neighbourElements: PointLevel[] = getNextElements({
      i,
      j,
      currentLevel,
      nCol,
      nRow,
    }).filter(([i, j]: PointLevel) => visited.includes([i, j]) === false);

    toVisitNext.push(...neighbourElements);
  }
}

function bfsRec({
  point,
  resultMat,
  nRow,
  nCol,
}: {
  point: PointLevel;
  resultMat: number[][];
  nRow: number;
  nCol: number;
}) {
  const [i, j, level] = point;
  if (resultMat[i][j] !== null) {
    return;
  }
  if (isOutOfBound(i, j, nRow, nCol)) {
    return;
  }

  if (resultMat[i][j] === 0) {
    const [starti, startj] = point;
    resultMat[starti][startj] = level;
    return;
  }

  const nextElemets = getNextElements({
    i,
    j,
    currentLevel: level,
    nCol,
    nRow,
  });

  nextElemets.forEach(([i, j, currentlevel]: PointLevel) => {
    bfsRec({ point: [i, j, currentlevel + 1], resultMat, nRow, nCol });
  });
}

function isOutOfBound(
  i: number,
  j: number,
  nRow: number,
  nCol: number
): boolean {
  const isOutOfBoundXDir = j < 0 || j >= nCol;
  const isOutOfBoundYDir = i < 0 || i >= nRow;
  return Boolean(isOutOfBoundXDir || isOutOfBoundYDir);
}

function getNextElements({
  i,
  j,
  currentLevel,
  nCol,
  nRow,
}: {
  i: number;
  j: number;
  currentLevel: number;
  nRow: number;
  nCol: number;
}): PointLevel[] {
  return directions
    .map(([diri, dirj]: Point) => {
      const nextEle: PointLevel = [diri + i, dirj + j, currentLevel + 1];
      return nextEle;
    })
    .filter(([i, j]: PointLevel) => {
      return isOutOfBound(i, j, nRow, nCol) === false;
    });
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
