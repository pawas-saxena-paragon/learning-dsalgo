// https://leetcode.com/problems/add-binary/description/?envType=study-plan-v2&envId=top-interview-150
function addBinary(a: string, b: string): string {
  let carry: number = 0;
  let result: string = "";

  [a, b] = padSmallerStringWithZero(a, b);

  for (let i = a.length - 1; i >= 0; i--) {
    let sum = carry;
    sum = sum + parseInt(a[i]) + parseInt(b[i]);

    carry = sum > 1 ? 1 : 0;

    const tempResult = sum % 2;
    result = tempResult + result;
  }

  if (carry === 1) {
    result = carry + result;
  }

  return result;
}

export function padSmallerStringWithZero(
  a: string,
  b: string
): [a: string, b: string] {
  let smallerStr = a.length > b.length ? b : a;
  const greaterStr = a.length > b.length ? a : b;

  const difference = greaterStr.length - smallerStr.length;
  smallerStr = "0".repeat(difference) + smallerStr;

  return [smallerStr, greaterStr];
}


export function decimalToBinary(decimalNumber): string {
  return decimalNumber.toString(2);
}

export function binaryToDecimal(bin): string {
  return parseInt(bin, 2).toString(10);
}

/**
 *
 * 0,0
 * 0,1
 * 1,0
 * 1,1
 *
 * & 0 | +0
 * & 0 | +1
 *
 * |0 | +0
 * |1 | +1
 * |1 | +1
 * |1 | +10
 */
