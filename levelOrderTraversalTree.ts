//BFS
// https://leetcode.com/problems/binary-tree-level-order-traversal/?envType=study-plan-v2&envId=top-interview-150
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

function levelOrder1(root: TreeNode | null): number[][] {
  const queue = [];
  const output: number[][] = [];
  //initalize queue with root
  if (root !== null) {
    queue.push(root);
  }

  let top = queue.shift();
  while (top) {
    // const levelElements = [];
    //traverse level until empty and then add level elements to queue

    // save to output
    output.push([top.val]);

    top.left && queue.push(top.left);
    top.right && queue.push(top.right);

    top = queue.shift(); // will be undefined if queue is empty
  }

  return output;
}

/**
 * with levels
 */
function levelOrder(root: TreeNode | null): number[][] {
    let nextLevel: (TreeNode | null)[] = [];
    let currentLevel: (TreeNode | null)[] = [];
    let traversalCurrentLevel: number[] = [];
    const output: number[][] = [];
    //initalize queue with root
    if (root !== null) {
        currentLevel.push(root);
    }

    //1.traverse current Level;
    //2.add nodes to next level
    //3.add current node to currentTraversal
    //5. if current level is empty
    //6. if next level is not empty make next level as current level and go to step 1
    //7. else  since current level and next level are both empty exit the loop
    //8.else pick next node from current level and step 2 until current level is completed

    while (currentLevel.length) {
        const topCurrentLevel = currentLevel.shift();
        traversalCurrentLevel.push(topCurrentLevel.val);
        topCurrentLevel.left && nextLevel.push(topCurrentLevel.left);
        topCurrentLevel.right && nextLevel.push(topCurrentLevel.right);

        if (currentLevel.length === 0) {
            if (nextLevel.length) {
                currentLevel = [...nextLevel];
                nextLevel = [];
                //add traversal for current to output;
                output.push(traversalCurrentLevel);
                traversalCurrentLevel = [];
            }
            //if next level is also empty then there is nothing to add to current level so the loop breaks
        }
    }

    if (traversalCurrentLevel.length) {
        output.push(traversalCurrentLevel);
    }

    return output;
}