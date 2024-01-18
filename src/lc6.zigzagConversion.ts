// https://leetcode.com/problems/zigzag-conversion/?envType=study-plan-v2&envId=top-interview-150
export function convert(s: string, numRows: number): string {
  const result: (string | undefined)[][] = [];
  enum Dir {
    Down = 1,
    Daigonal = -1,
  }

  //init
  for (let i = 0; i < numRows; i++) {
    result.push([]);
  }

  let currentRowPtr = 0;
  let direction = Dir.Down;

  for (let char of s) {
    result[currentRowPtr].push(char);

    if (currentRowPtr === numRows - 1) {
      direction = Dir.Daigonal;
    } else if (currentRowPtr === 0) {
      direction = Dir.Down;
    }

    if (numRows > 1) {
      //change row
      currentRowPtr = currentRowPtr + direction;
    }
  }

  return result.reduce((acc: string, curr: (string | undefined)[]) => {
    return acc + curr.filter((ele) => ele).join("");
  }, "");
}
