import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/?envType=study-plan-v2&envId=top-interview-150

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (inorder.length <= 3) {
    const root = new TreeNode(preorder[0]);
    if (preorder[1] !== undefined) {
      root.left = new TreeNode(preorder[1]);
    } else {
      root.left = new TreeNode(null);
    }
    if (preorder[2] !== undefined) {
      root.right = new TreeNode(preorder[2]);
    } else {
      root.right = new TreeNode(null);
    }
    // add null values.
    return root;
  } else {
    // find root inside inorder
    const rootIndexInsideInorder = inorder.findIndex(
      (ele: number) => ele === preorder[0]
    );

    if (rootIndexInsideInorder > -1) {
      const leftSubtreeInorder = inorder.slice(0, rootIndexInsideInorder);
      const rightSubtreeInorder = inorder.slice(rootIndexInsideInorder + 1);

      const leftPreorder = preorder.slice(1, 1 + leftSubtreeInorder.length);
      const rightPreorder = preorder.slice(1 + leftSubtreeInorder.length);

      const root = new TreeNode(preorder[0]);
      root.left = buildTree(leftPreorder, leftSubtreeInorder);
      root.right = buildTree(rightPreorder, rightSubtreeInorder);
      return root;
    } else {
      throw "node not found in in order";
    }
  }
}
