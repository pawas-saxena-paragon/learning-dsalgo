export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

type NodeLevel = { node: TreeNode; level: number };

function bfs(root: TreeNode): TreeNode[][] {
  const resultWithLevels: NodeLevel[] = [];
  const toVist: NodeLevel[] = [{ node: root, level: 0 }];

  while (toVist.length !== 0) {
    let { node: currentTreeNode, level } = toVist.shift();
    resultWithLevels.push({ node: currentTreeNode, level });
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

function levelTraverse(root: TreeNode): TreeNode[][] {
  const result: TreeNode[][] = [];
  bfsRec(root, 0, result);
  return result;
}

function bfsRec(root: TreeNode, level: number, result: TreeNode[][]): void {
  if (root === null) {
    return;
  }

  // add root to the result arr
  if (result[level]) {
    result[level].push(root);
  } else {
    result[level] = [root];
  }

  if (root.left !== null) {
    bfsRec(root.left, level + 1, result);
  } else if (root.right !== null) {
    bfsRec(root.right, level + 1, result);
  }
}
