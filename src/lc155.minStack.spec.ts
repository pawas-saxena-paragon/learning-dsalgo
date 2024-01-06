import { MinStack } from "./lc155.minStack";

describe("minStack", () => {
  it("shold give min", () => {
    const minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    minStack.getMin(); // return -3
    minStack.pop();
    minStack.top(); // return 0
    expect(minStack.getMin()).toEqual(-3); // return -2
  });
});
