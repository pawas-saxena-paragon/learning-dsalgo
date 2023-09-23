class TreeNode {
  key: number;
  left: TreeNode | null;
  right: TreeNode | null;

  constructor(item: number) {
    this.key = item;
    this.left = this.right = null;
  }

  dfsInOrder(): number[] {
    let output: number[] = [];
    const leftTraversal = this.left ? this.left.dfsInOrder() : [];
    const rightTraversal = this.right
      ? this.right.dfsInOrder()
      : [];
    output = [...leftTraversal, this.key, ...rightTraversal];
    return output;
  }

  insertRec(item: number): void {
    if (item > this.key) {
      if (this.right) {
        this.right.insertRec(item);
      } else {
        this.right = new TreeNode(item);
      }
    } else {
      if (this.left) {
        this.left.insertRec(item);
      } else {
        this.left = new TreeNode(item);
      }
    }
  }
}

const bst = new TreeNode(50);

bst.insertRec(50);
bst.insertRec(30);
bst.insertRec(20);
bst.insertRec(40);
bst.insertRec(70);
bst.insertRec(60);
bst.insertRec(80);

console.log(bst.dfsInOrder());
