// https://leetcode.com/problems/plus-one/?envType=study-plan-v2&envId=top-interview-150
function plusOne(digits: number[]): number[] {
  const result: number[] = [];
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    let tempResult = digits[i] + carry;

    if (tempResult > 9) {
      carry = 1;
      result.unshift(tempResult - 10);
    } else {
      carry = 0;
      result.unshift(tempResult);
    }
  }

  if (carry === 1) {
    result.unshift(1);
  }

  return result;
}
