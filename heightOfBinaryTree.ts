class TreeNode {
  constructor(data: number, left: TreeNode | null, right: TreeNode | null) {
    this.data = null;
    this.left = left;
    this.right = right;
  }
}

function treeHeight(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }

  return 1 + Math.max(treeHeight(root.left), treeHeight(root.right));
}
