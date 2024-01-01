export function numberConnectedComponents(
  n: number,
  edges: number[][]
): number {
  /**
   * do a bfs and count the number of times you had to do bfs
   * nodes are 0,1,2,3,4 it is given as a single number but the idea is the same
   */
  const visited: boolean[] = Array(n).fill(false);
  const adjList = generateAdjList(edges);
  let connectedComponentCount = 0;
  for (let i = 0; i < n; i++) {
    if (visited[i] === true) {
      continue;
    } else {
      connectedComponentCount++;
      dfs(i, adjList, visited);
    }
  }

  return connectedComponentCount;
}

function generateAdjList(edges: number[][]): Record<number, number[]> {
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

function dfs(
  start: number,
  adjList: Record<number, number[]>,
  visited: boolean[]
): void {
  if (adjList[start].length === 0 || visited[start] === true) {
    return;
  }

  visited[start] = true;
  for (let nextNode of adjList[start]) {
    dfs(nextNode, adjList, visited);
  }
}
