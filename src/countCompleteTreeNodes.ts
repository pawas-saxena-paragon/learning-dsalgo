import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/count-complete-tree-nodes/?envType=study-plan-v2&envId=top-interview-150
function countNodes(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  const H = getHeight(root);
  const rightChildHeight = getHeight(root.right);
  if (rightChildHeight === H - 1) {
    //half node lies in the right tree
    // nodes in left node + nodes in right node
    return getNodesFullTree(H-1) + countNodes(root.right);
  }
  else {
    // height of right node is H-2 as it is missing the last level.
    return getNodesFullTree(H-2) + countNodes(root.left);
  }
}

function getHeight(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return 1 + getHeight(root.left);
}

function getNodesFullTree(height: number): number {
  return Math.pow(2, height);
}
// H is the height of the entire tree
// if height right subtree is H -1 then the half node lies in the right tree
// if height of left subtree is H-2 then the right tree does not have the last level and the left tree has the half node
// nodes in a full tree is (2^0 + 2^1 + ...+ 2^h-1) = (2^h)
