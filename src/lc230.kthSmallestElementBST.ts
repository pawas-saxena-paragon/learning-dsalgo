import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/kth-smallest-element-in-a-bst/?envType=study-plan-v2&envId=top-interview-150
function kthSmallest(root: TreeNode | null, k: number): number {
  const ascArr = preOrder(root);
  return ascArr[k-1].val;
};

function preOrder(root: TreeNode): TreeNode[]{
    if(root === null){
        return [];
    }

    return [...preOrder(root.left), root, ...preOrder(root.right)];
}