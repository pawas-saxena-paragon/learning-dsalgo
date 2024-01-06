export class MinStack {
  private min: number;
  private arr: number[];
  constructor() {
    this.min = Infinity;
    this.arr = [];
  }

  push(val: number): void {
    this.min = Math.min(val, this.min);
    this.arr.push(val);
  }

  pop(): number {
    return this.arr.pop();
  }

  top(): number {
    return this.arr[this.arr.length - 1];
  }

  getMin(): number {
    return this.min;
  }
}
