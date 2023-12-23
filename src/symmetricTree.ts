import { TreeNode } from "./binaryTree.util";
// https://leetcode.com/problems/symmetric-tree/?envType=study-plan-v2&envId=top-interview-150
export function symmetricTree(p: TreeNode | null): boolean {
  // there is atleast 1 node in tree in question constraints
  const t1Mirror = getMirrorImage(p.left);
  return isSameTree(t1Mirror, p.right);
}

export function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  if (p === null) {
    return q === null;
  } else if (q === null) {
    return p === null;
  }

  if (p.val !== q.val) {
    return false;
  } else {
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
  }
}

export function getMirrorImage(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return root;
  } else {
    const leftMirror: TreeNode = getMirrorImage(root.left);
    const rightMirror: TreeNode = getMirrorImage(root.right);
    root.left = rightMirror;
    root.right = leftMirror;
    return root;
  }
}
