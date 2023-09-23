const numLetterMap = {
  "2": ["a", "b", "c"],
  "3": ["d", "e", "f"],
  "4": ["g", "h", "i"],
  "5": ["j", "k", "l"],
  "6": ["m", "n", "o"],
  "7": ["p", "q", "r", "s"],
  "8": ["t", "u", "v"],
  "9": ["w", "x", "y", "z"],
};

function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }
  if (digits.length === 1) {
    const firstNum = digits.charAt(0);
    return numLetterMap[firstNum];
  } else {
    const firstNum = digits.charAt(0);
    const restOfDigits = digits.substring(1);
    const firstAlphabets = numLetterMap[firstNum];
    let solution = [];
    firstAlphabets.forEach((firstAlphabet) => {
      solution = [
        ...solution,
        ...letterCombinations(restOfDigits).map((cb) => firstAlphabet + cb),
      ];
    });
    return solution;
  }
}

console.log(letterCombinations("23"));
