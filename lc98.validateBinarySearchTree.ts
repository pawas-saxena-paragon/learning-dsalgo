import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/validate-binary-search-tree/?envType=list&envId=pm1gvxgg
function isValidBST(root: TreeNode | null): boolean {
  return isValid(root, [], () => true);
}

function isValid(
  root: TreeNode,
  arr: number[],
  compareFn: (ele: number[], current: number) => boolean
): boolean {
  if (root === null) {
    return true;
  }

  if (compareFn(arr, root.val) === false) {
    return false;
  }

  if (root.left === null && root.right === null) {
    return true;
  } else if (root.left === null && root.right !== null) {
    if (root.right.val <= root.val) {
      return false;
    }

    return isValid(root.right, [...arr, root.val], currentGreaterThanAllPrev);
  } else if (root.right === null && root.left !== null) {
    if (root.left.val >= root.val) {
      return false;
    }
    return isValid(root.left, [...arr, root.val], currentLessThanAllPrev);
  }

  if (root.right.val <= root.val || root.val <= root.left.val) {
    return false;
  }

  return (
    isValid(root.left, [...arr, root.val], currentLessThanAllPrev) &&
    isValid(root.right, [...arr, root.val], currentGreaterThanAllPrev)
  );
}

function currentGreaterThanAllPrev(arr: number[], current: number) {
  return arr.every((ele: number) => current > ele);
}

function currentLessThanAllPrev(arr: number[], current: number) {
  return arr.every((ele: number) => current < ele);
}
