function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (root === null) {
    return false;
  } else if (root.left === subRoot || root.right === subRoot) {
    return true;
  } else {
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
  }
}
