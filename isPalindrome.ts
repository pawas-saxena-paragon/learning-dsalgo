function isPalindrome(x: number): boolean {
  const xstr: string = x.toString();
  const len = xstr.length;
  let leftPtr: number;
  let rightPtr: number;
  if (len % 2 === 0) {
    leftPtr = len / 2 - 1;
    rightPtr = len / 2;
  } else {
    leftPtr = Math.floor(len / 2) - 1;
    rightPtr = Math.ceil(len / 2);
  }

  console.log(leftPtr, rightPtr);
  while (leftPtr >= 0 && rightPtr < len) {
    if (xstr.charAt(leftPtr) !== xstr.charAt(rightPtr)) {
      return false;
    }

    leftPtr--;
    rightPtr++;
  }
  return true;
}

console.log(isPalindrome(112211));
