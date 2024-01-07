// https://leetcode.com/problems/min-stack/
export class MinStack {
  private min: number;
  private arr: number[];
  private minArr: number[];
  constructor() {
    this.min = Infinity;
    this.arr = [];
    this.minArr = [];
  }

  push(val: number): void {
    this.min = Math.min(val, this.min);
    this.arr.push(val);
    this.minArr.push(val);
    this.minArr.sort();
  }

  pop(): number {
    this.minArr = this.minArr.filter((ele) => ele !== this.top());
    return this.arr.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.minArr[0];
  }
}
