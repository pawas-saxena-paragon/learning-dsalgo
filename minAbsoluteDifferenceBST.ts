import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/minimum-absolute-difference-in-bst/?envType=study-plan-v2&envId=top-interview-150
function getMinimumDifference(root: TreeNode | null): number {
  let prev: TreeNode | null = root;
  let min: number = Infinity;

  inOrder(root);

  return min;
}

function inOrder(root: TreeNode | null): void {
  if (root === null) {
    return;
  }

  inOrder(root.left);
  root;
  inOrder(root.right);
}
