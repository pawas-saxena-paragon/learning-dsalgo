//  Definition for Node.
export class Node {
  val: number;
  neighbors: Node[];
  constructor(val?: number, neighbors?: Node[]) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

/**
 * gets adjacency list from a list of edges
 */
export function generateAdjList(edges: number[][]): Record<number, number[]> {
  const adjList = edges.reduce(
    (acc: Record<number, number[]>, edge: number[]) => {
      const [start, end] = edge;
      if (acc[start] === undefined) {
        acc[start] = [];
      }

      if (acc[end] === undefined) {
        acc[end] = [];
      }
      acc[start].push(end);
      acc[end].push(start);
      return acc;
    },
    {}
  );

  return adjList;
}
