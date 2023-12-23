// https://leetcode.com/problems/spiral-matrix/?envType=study-plan-v2&envId=top-interview-150
type Directions = "leftToRight" | "topToBottom" | "rightToLeft" | "bottomToTop";

const order: Record<Directions, [number, number]> = {
  leftToRight: [1, 0],
  topToBottom: [0, -1],
  rightToLeft: [-1, 0],
  bottomToTop: [0, 1],
};

function spiralOrder(matrix: number[][]): number[] {
  const startx = 0;
  const endx = matrix[0].length;
  const starty = 0;
  const endy = matrix.length;

  const getx = alternatively(startx, endx - 1);
  const gety = alternatively(starty, endy - 1);

  let lastx = getx();
  let lasty = gety();

  let result = [];
  const clockwiseOrder: Directions[] = [
    "leftToRight",
    "topToBottom",
    "rightToLeft",
    "bottomToTop",
  ];
  let i = 0;
  while (result.length < endx * endy) {
    const currentDirection: Directions = clockwiseOrder[i];
    let currentTraversal;
    switch (currentDirection) {
      case "leftToRight":
        currentTraversal = traverse(matrix, currentDirection, []);
        // starty === endy
        break;
      case "rightToLeft":
        break;
      case "topToBottom":
        //start x === end x
        break;
      case "bottomToTop":
      default:
    }

    result = [...result, ...currentTraversal];

    i++;
    i %= 4;
  }

  return result;
}

function traverse(
  matrix: number[][],
  direction: Directions,
  [startx, starty]: [number, number],
  [endx, endy]: [number, number]
): number[] {
  const result = [];
  switch (direction) {
    case "leftToRight":
      // starty === endy
      for (let i = startx; i <= endx; i += order[direction][0]) {
        result.push(matrix[i][starty]);
      }
      break;
    case "rightToLeft":
      for (let i = startx; i >= endx; i += order[direction][0]) {
        result.push(matrix[i][starty]);
      }
      break;
    case "topToBottom":
      //start x === end x
      for (let i = starty; i <= endy; i += order[direction][1]) {
        result.push(matrix[startx][i]);
      }
      break;
    case "bottomToTop":
    default:
      for (let i = starty; i >= endy; i += order[direction][1]) {
        result.push(matrix[startx][i]);
      }
  }

  return result;
}

export function alternatively(start: number, end: number) {
  let count = 0;
  return function (): number {
    count++;
    let result;
    if (count % 2 !== 0) {
      // get from beg
      result = start;
      start++;
    } else {
      result = end;
      end--;
    }

    return result;
  };
}
