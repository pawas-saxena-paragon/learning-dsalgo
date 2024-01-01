import { generateAdjList } from "./graph.utils";

// https://leetcode.com/problems/find-if-path-exists-in-graph/
function validPath(
  n: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (!edges.length) {
    return true;
  }

  const adjList = generateAdjList(edges);
  const visited: boolean[] = Array(n).fill(false);
  dfs(source, adjList, visited);
  return visited[destination];
}

function dfs(
  start: number,
  adjList: Record<number, number[]>,
  visited: boolean[]
): void {
  if (visited[start] === true) {
    return;
  }

  let currentNode = start;
  visited[start] = true;
  for (let nextNode of adjList[currentNode]) {
    dfs(nextNode, adjList, visited);
  }
}
