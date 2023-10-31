class TreeNode {
  constructor(data: number, left: TreeNode | null, right: TreeNode | null) {
    this.data = null;
    this.left = left;
    this.right = right;
  }
}

// https://leetcode.com/problems/maximum-depth-of-binary-tree/?envType=study-plan-v2&envId=top-interview-150
function treeHeight(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}
