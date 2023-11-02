import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/average-of-levels-in-binary-tree/?envType=study-plan-v2&envId=top-interview-150
function averageOfLevels(root: TreeNode | null): number[] {
  if (root === null) {
    return [0];
  }

  const levels: TreeNode[][] = [];
  //   levels.push(
  //     [root.left, root.right].filter((node: TreeNode) => node !== null)
  //   );

  levels.push([root]);

  let lastLevel = levels[levels.length - 1];
  while (lastLevel.length) {
    const nextLevel = lastLevel
      .reduce((prev: (TreeNode | null)[], currentNode: TreeNode | null) => {
        if (currentNode !== null) {
          prev.push(currentNode.left, currentNode.right);
        }
        return prev;
      }, [] as (TreeNode | null)[])
      .filter((node: TreeNode | null) => node !== null);

    nextLevel.length && levels.push(nextLevel);
    lastLevel = nextLevel;
  }

  return levels.map((level: TreeNode[]) => {
    return level
      .map((node: TreeNode) => node.val)
      .reduce(
        (prev: number, currentVal: number, index: number) =>
          (prev * index + currentVal) / (index + 1),
        0
      );
  });
}
