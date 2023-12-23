import { rotate } from "./rotateArray";

describe("RotateArray", () => {
  it("nums = [1,2,3,4,5,6,7], k = 3", () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    rotate(input, 3);
    expect(input).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });

  it("nums = [1,2,3,4,5,6,7], k = 2", () => {
    const input = [1, 2, 3, 4, 5, 6, 7];
    rotate(input, 2);
    expect(input).toEqual([6, 7, 1, 2, 3, 4, 5]);
  });

  it('nums= [-1] k = 2', ()=>{
    const input = [-1];
    rotate(input, 2);
    expect(input).toEqual([-1]);
  })

  it('nums= [1,2] k = 3', ()=>{
    const input = [1,2];
    rotate(input, 3);
    expect(input).toEqual([2,1]);
  })
});
