class GraphVertex {
  constructor() {}
}

class Graph {
  constructor(numberOfVertex: number) {
    for (let i = 0; i < numberOfVertex; i++) {
      this.allVertex.push(i);
      this.adjacencyList[i] = [];
    }
  }

  allVertex: number[] = [];
  edges: [number, number][] = [];
  adjacencyList: Record<number, number[]> = {};

  addEdge(startVertex: number, endVertex: number) {
    this.edges.push([startVertex, endVertex]);
    this.adjacencyList[startVertex].push(endVertex);
    // for undirected graphs edges we add edges to both vertices and check for duplicates also while doing so
    // this.adjacencyList[endVertex].push(startVertex);
  }

  BFS(startVertex: number): number[] {
    const visited: boolean[] = Array(this.allVertex.length).fill(false);
    const output: number[] = [];
    let visitNextQueue: number[] = [];
    let top = startVertex;
    // 0 is also a node so checking against undefined
    while (top !== undefined) {
      console.log("iteration", visitNextQueue, output);
      output.push(top);
      visited[top] = true;
      const unvisitedNextVertices = (this.adjacencyList[top] ?? []).filter(
        (adjacentVertex: number) => !visited[adjacentVertex]
      );
      visitNextQueue = [...visitNextQueue, ...unvisitedNextVertices];
      top = visitNextQueue.shift();
    }

    return output;
  }

  /**
   * 
   * @param startVertex https://www.geeksforgeeks.org/iterative-depth-first-traversal/?ref=lbp
   * There is also a recursive version for DFS but not for BFS
   */
  DFS(startVertex: number): number[] {
    const output: number[] = [];
    let traversalStack: number[] = [];
    // output can also be used as visited I believe.
    const visited: boolean[] = Array(this.allVertex.length).fill(false);
    let last = startVertex;

    while (last !== undefined) {
      console.log("iteration", output, traversalStack);
      output.push(last);
      visited[last] = true;
      const unvisitedNextVertices = (this.adjacencyList[last] ?? []).filter(
        (adjacentVertex: number) => !visited[adjacentVertex]
      );
      traversalStack = [...traversalStack, ...unvisitedNextVertices];
      last = traversalStack.pop();
    }

    return output;
  }
}

//this is an example of a directed graph as the edges 0,2 and 2,0 are given explicitly
const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 2);
g.addEdge(2, 0);
g.addEdge(2, 3);
g.addEdge(3, 3);

console.log(g.DFS(0));


let g1 = new Graph(5);
g1.addEdge(1, 0);
g1.addEdge(0, 2);
g1.addEdge(2, 1);
g1.addEdge(0, 3);
g1.addEdge(1, 4);

console.log(g1.DFS(0));