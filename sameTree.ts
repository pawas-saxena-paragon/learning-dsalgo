import { TreeNode } from "./binaryTree.util";

// https://leetcode.com/problems/same-tree/?envType=study-plan-v2&envId=top-interview-150
function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
  const t1ToVisit = [p];
  const t2ToVisit = [q];
  let t1 = p;
  let t2 = q;

  while (t1ToVisit.length !== 0 && t2ToVisit.length !== 0) {
    t1 = t1ToVisit.shift();
    t2 = t2ToVisit.shift();
    if (compare(t1, t2) === false) {
      return false;
    }

    nullCheckAndAddChild(t1ToVisit, t1);
    nullCheckAndAddChild(t2ToVisit, t2);
  }

  if (t1ToVisit.length === 0 && t2ToVisit.length === 0) {
    return true;
  } else {
    return false;
  }
}

function compare(node1: TreeNode, node2: TreeNode): boolean {
  if (node1 === null && node2 === null) {
    return true;
  } else if (node1 !== null && node2 !== null) {
    return Boolean(node1.val === node2.val);
  } else if (node1 === null && node2 !== null) {
    return false;
  } else if (node2 === null && node1 !== null) {
    return false;
  } else return true;
}

function nullCheckAndAddChild(arr: TreeNode[], parentNode: TreeNode): void {
  if (parentNode !== null) {
    arr.push(parentNode.left);
    arr.push(parentNode.right);
  }
}
