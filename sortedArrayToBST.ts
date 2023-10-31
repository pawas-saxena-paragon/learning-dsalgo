import { TreeNode } from "./binaryTree.util";

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const root = new TreeNode(nums[0]);
  let prev = root;
  for (let i = 1; i < nums.length; i++) {
    insertRec(nums[i], root);
  }
  return root;
}
function insertRec(item: number, currentNode: TreeNode): void {
  if (item > currentNode.val) {
    if (currentNode.right) {
      currentNode.right.insertRec(item);
    } else {
      currentNode.right = new TreeNode(item);
    }
  } else {
    if (currentNode.left) {
      currentNode.left.insertRec(item);
    } else {
      currentNode.left = new TreeNode(item);
    }
  }
}

function findLeafBST(node: TreeNode, val: number): TreeNode {
  // traverse to the leaf of binary tree.
  let nextNode = node;
  let parent = node;
  while (nextNode) {
    parent = nextNode;
    if (val > node.val) {
      nextNode = node.right;
    } else {
      nextNode = node.left;
    }
  }
  // nextNode is leaf node.
  return parent;
}
