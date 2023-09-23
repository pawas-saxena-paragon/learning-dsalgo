class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

function sortedArrayToBST(nums: number[]): TreeNode | null {
  const root = new TreeNode(nums[0]);
  let prev = root;
  for (let i = 1; i < nums.length; i++) {
    insertRec(nums[i], root);
  }
  return root;
}
function insertRec(item: number, currentNode: TreeNode): void {
  if (item > currentNode.key) {
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
