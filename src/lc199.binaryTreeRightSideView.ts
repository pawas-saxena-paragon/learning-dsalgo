import { TreeNode } from "./binaryTree.util";

type NodeLevel = { node: TreeNode; level: number };
function rightSideView(root: TreeNode | null): number[] {
  if (root === null) {
    return [];
  }
  return bfs(root).map(
    (levelArr: TreeNode[]) => levelArr[levelArr.length - 1].val
  );
}

function bfs(root: TreeNode): TreeNode[][] {
  const resultWithLevels: NodeLevel[] = [];
  const toVist: NodeLevel[] = [{ node: root, level: 0 }];

  while (toVist.length !== 0) {
    let { node: currentTreeNode, level } = toVist.shift();
    resultWithLevels.push({ node: currentTreeNode, level });
    // if (currentTreeNode === null) {
    //   continue;
    // }
    if (currentTreeNode.left !== null) {
      toVist.push({ node: currentTreeNode.left, level: level + 1 });
    }

    if (currentTreeNode.right !== null) {
      toVist.push({ node: currentTreeNode.right, level: level + 1 });
    }
  }

  return resultWithLevels.reduce(
    (acc: TreeNode[][], { node, level }: NodeLevel) => {
      if (acc[level]) {
        acc[level].push(node);
      } else {
        acc[level] = [node];
      }
      return acc;
    },
    [] as TreeNode[][]
  );
}

/**
 * lets print the nodes without worrying about the order.
 * lets try to use a tupe where each element has a value called level associated with it.
 *
 */
