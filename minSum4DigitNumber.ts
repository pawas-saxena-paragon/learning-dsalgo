function minimumSum(num: number): number {
  const individualNumbers: number[] = [];

  let numCopy = num;
  while (numCopy) {
    const remainder = numCopy % 10;
    individualNumbers.push(remainder);
    numCopy = Math.trunc(numCopy / 10);
  }

  individualNumbers.sort((a, b) => a - b);

  const [num1, num2, num3, num4] = individualNumbers;
  const finalNumber1 = parseInt(num1.toString() + num3);
  const finalNumber2 = parseInt(num2.toString() + num4);

  return finalNumber1 + finalNumber2;
}

console.log(minimumSum(2932));
