export function isHappy(n: number): boolean {
  const encountered = new Set<number>();
  return checkHappiness(n, encountered);
}

function checkHappiness(num: number, encountered: Set<number>): boolean {
  if (encountered.has(num)) {
    return false;
  }
  encountered.add(num);

  const squareSum = sumOfSquareOfDigits(num);
  if (squareSum === 1) {
    return true;
  }

  return checkHappiness(squareSum, encountered);
}

function sumOfSquareOfDigits(num: number): number {
  let res = 0;
  while (num !== 0) {
    const lastDigit = num % 10;
    num = Math.floor(num / 10);
    res += lastDigit * lastDigit;
  }

  return res;
}
