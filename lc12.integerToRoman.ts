export function intToRoman(num: number): string {
  const romansMapRev = {
    1: "I",
    5: "V",
    10: "X",
    50: "L",
    100: "C",
    500: "D",
    1000: "M",
  };

  let currentNum = num;
  let indexFromLast = 1;
  let result = "";
  while (currentNum > 0) {
    const mod10 = currentNum % 10;
    const mod5 = currentNum % 5;
    let intermediateRes = "";
    const tens = Math.pow(10, indexFromLast);
    const lastTens = Math.pow(10, indexFromLast - 1);

    if (mod10 > 5 && mod10 < 9) {
      intermediateRes += romansMapRev[5 * lastTens];
      for (let i = 1; i <= mod5; i++) {
        intermediateRes += romansMapRev[lastTens];
      }
    } else if (mod10 === 0) {
      //   intermediateRes += romansMapRev[tens];
      // do nothing as the current number is zero
    } else if (mod10 === 9) {
      intermediateRes += romansMapRev[lastTens] + romansMapRev[tens];
    } else if (mod10 === 5) {
      intermediateRes += romansMapRev[5 * lastTens];
    } else if (mod10 === 4) {
      intermediateRes += romansMapRev[lastTens];
      intermediateRes += romansMapRev[5 * lastTens];
    } else {
      for (let i = 1; i <= mod5; i++) {
        intermediateRes += romansMapRev[lastTens];
      }
    }

    indexFromLast++;
    currentNum = Math.floor(currentNum / 10);
    result = intermediateRes + result;
  }

  return result;
}
