import { Node } from "./graph.utils";

// https://leetcode.com/problems/clone-graph/description/?envType=study-plan-v2&envId=top-interview-150
function cloneGraph(node: Node | null): Node | null {
  if (node === null) {
    return null;
  }

  const visited: Node[] = Array(101).fill(null);
  dfsCreateNode(node, visited);
  return visited[node.val];
}

function dfsCreateNode(start: Node, visited: Node[]): void {
  if (visited[start.val] !== null) {
    return;
  }

  visited[start.val] = new Node(start.val);
  for (let nextNode of start.neighbors) {
    dfsCreateNode(nextNode, visited);
    // next node would have been ccreated by now so we can push it safely
    visited[start.val].neighbors.push(visited[nextNode.val]);
  }
}

/**
 * create a node for start with val . and neighbours are pending
 *
 * for each element in start.neighbours
 *
 * approach 1 - create all nodes as an array and then fix the neighbours of each element
 *  since all elements have unique values that can be used to uniquely identify each node.
 *  Also the values are going to be in the range of 0-100 so we can create an array of 101 size
 *  and store visited elements in the array. initalize the array with nulls.
 *  using this we can make the visited array but how to find the entire graph back ? you dont nextNode
 *  the entire graph back . Just need refernce to the start element =  visited[start.val]
 *  so the goal is to make the visited array
 *  is the second pass of the dfs we will fix the neighbours. But the second pass will require another visited arr
 *  In the first pass we will just create nodes
 *  then later we will try to squeeze it in the same pass
 *
 *
 */
