// https://leetcode.com/problems/roman-to-integer/?envType=study-plan-v2&envId=top-interview-150/+
function romanToInt(s: string): number {
  const romansMap = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  const romanArr = s.split("");

  for (let i = 0, j = 1; i < romanArr.length - 1; i++, j++) {
    const current = romanArr[i];
    const next = romanArr[j];
    if (current === "I") {
      if (next === "V") {
        romanArr[i] = "II";
        romanArr[j] = "II";
      } else if (next === "X") {
        romanArr[i] = "V";
        romanArr[j] = "IIII";
      }
    } else if (current === "X") {
      if (next === "L") {
        romanArr[i] = "XX";
        romanArr[j] = "XX";
      } else if (next === "C") {
        romanArr[i] = "L";
        romanArr[j] = "XXXX";
      }
    } else if (current === "C") {
      if (next === "D") {
        romanArr[i] = "CC";
        romanArr[j] = "CC";
      } else if (next === "M") {
        romanArr[i] = "D";
        romanArr[j] = "CCCC";
      }
    }
  }

  return romanArr
    .map((current) => (current.length > 1 ? current.split("") : current))
    .flat()
    .reduce((prev, current) => {
      prev += romansMap[current];
      return prev;
    }, 0);
}
