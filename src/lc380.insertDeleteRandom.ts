// https://leetcode.com/problems/insert-delete-getrandom-o1/description/?envType=study-plan-v2&envId=top-interview-150
class RandomizedSet {
  set: Set<number>;
  constructor() {
    this.set = new Set();
  }

  insert(val: number): boolean {
    if (this.set.has(val)) {
      return false;
    }

    this.set.add(val);
    return true;
  }

  remove(val: number): boolean {
    if (this.set.has(val)) {
      this.set.delete(val);
      return true;
    }

    return false;
  }

  getRandom(): number {
    const arr = [...this.set];
    const N = arr.length - 1;
    const randomNumberWithinArr = Math.floor(Math.random() * (N + 1));
    return arr[randomNumberWithinArr];
  }
}
