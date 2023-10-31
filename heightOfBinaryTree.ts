import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/maximum-depth-of-binary-tree/?envType=study-plan-v2&envId=top-interview-150
function treeHeight(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}
