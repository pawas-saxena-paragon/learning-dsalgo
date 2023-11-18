import { TreeNode } from "./binaryTree.util";
// https://leetcode.com/problems/path-sum/?envType=study-plan-v2&envId=top-interview-150
function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (root === null) {
    return false;
  }

  if (root.left === null && root.right === null && targetSum - root.val === 0) {
    return true;
  }

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}
