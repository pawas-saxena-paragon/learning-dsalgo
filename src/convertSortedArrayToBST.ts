import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree
function sortedArrayToBST(nums: number[]): TreeNode | null {
  return arrToBST(nums, 0, nums.length - 1);
}

function arrToBST(nums: number[], start: number, end: number): TreeNode | null {
  const rootIndex = Math.floor((start + end) / 2);
  const root = new TreeNode(nums[rootIndex]);
  if (end - start < 0) {
    return null;
  } else if (end - start === 0) {
    return new TreeNode(nums[start]);
  } else if (end - start === 1) {
    const node1 = new TreeNode(nums[start]);
    const node2 = new TreeNode(nums[end]);
    node2.left = node1;
    return node2;
  } else if (end - start === 2) {
    // base cond.
    root.left = new TreeNode(nums[start]);
    root.right = new TreeNode(nums[end]);
  } else {
    root.left = arrToBST(nums, start, rootIndex - 1);
    root.right = arrToBST(nums, rootIndex + 1, end);
  }

  return root;
}
