function hammingWeight(n: number): number {
    const lastDigitMask = 1;
    let currentNum = n;
    let num1Bits = 0;
    while (currentNum > 0) {
      num1Bits += lastDigitMask & currentNum;
   
      currentNum = currentNum >>> 1;
    }
  
    return num1Bits;
  }
  