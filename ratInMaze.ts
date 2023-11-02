enum Directions {
  D = "D",
  R = "R",
  U = "U",
  L = "L",
}
// runs into an infinite loop
export class RatMaze {
  solution: Directions[] = [];
  constructor(private maze: number[][], private mazeSize: number) {}

  getNextMoves(
    currentx: number,
    currenty: number
  ): [number, number, Directions][] {
    //starting from top left. top left is 0,0 and bottom right is N-1, N-1
    const allPossibleNextMoves: [number, number, Directions][] = [
      [currentx, currenty + 1, Directions.D],
      [currentx - 1, currenty, Directions.L],
      [currentx + 1, currenty, Directions.R],
      [currentx, currenty - 1, Directions.U],
    ];

    return allPossibleNextMoves.filter(
      ([x, y]: [number, number, Directions]) => {
        // console.log("he;", this.maze[x], x);
        return (
          x >= 0 &&
          x < this.mazeSize &&
          y >= 0 &&
          y < this.mazeSize &&
          this.maze[x][y] === 1
        );
      }
    );
  }

  solve(x: number, y: number): boolean {
    if (x === this.mazeSize - 1 && y === this.mazeSize - 1) {
      return true;
    }

    const nextMoves = this.getNextMoves(x, y);

    for (const [nextx, nexty, direction] of nextMoves) {
    //   const solnSnapshot = [...this.solution];
      this.solution.push(direction);
      if (this.solve(nextx, nexty)) {
        // print soln
        return true;
      } else {
        // this.solution = [...solnSnapshot];
        this.solution.pop();
        // do nothing and move to next move
      }
    }

    return false;
  }
}

const maze1 = [
  [1, 0, 0, 0],
  [1, 1, 0, 1],
  [1, 1, 0, 0],
  [0, 1, 1, 1],
];
const m = new RatMaze(maze1, 4);
m.solve(0, 0);
console.log(m.solution);
