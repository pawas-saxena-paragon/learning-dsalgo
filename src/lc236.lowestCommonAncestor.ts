import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/?envType=list&envId=pm1gvxgg
function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  const dp = new Map<[TreeNode, TreeNode], boolean>();
  return lca(root, p, q);

  function contains(root: TreeNode | null, p: TreeNode): boolean {
    if (root === null) {
      return false;
    }

    if (dp.has([root, p])) {
      return dp.get([root, p]);
    }

    let ptr: TreeNode = root;
    let result: boolean;

    if (ptr === p || ptr.left === p || ptr.right === p) {
      result = true;
    } else {
       result = contains(root.left, p) || contains(root.right, p);
    }
    dp.set([root, p], result);

    return result;
  }

  function lca(root: TreeNode, p: TreeNode, q: TreeNode): TreeNode {
    if (root === p || root === q) {
      return root;
    } else {
      const leftp = contains(root.left, p);
      const rightq = contains(root.right, q);
      
      if (leftp === true && rightq === true) {
        return root;
      } else if (leftp === true && rightq === false) {
        return lca(root.left, p, q);
      } else if (leftp === false && rightq === true) {
        return lca(root.right, p, q);
      } else {
        // means p is in right && q is in left . opposite of first cond.
        return root;
      }
    }
  }
}

/**
 * traversal - depend upon the kind of traversal.
 * 3
 * 5,4
 *
 * LMR 534
 * LRM 543
 *
 *
 * recursion ? contains(root.left, p) == true && contains(root.right, q) then ans is root
 * else lca(root.left, p,q) or lca(root.right , p,q)
 *
 */
