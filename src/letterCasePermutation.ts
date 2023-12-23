// https://leetcode.com/problems/letter-case-permutation/
export function letterCasePermutation(s: string): string[] {
  if (s.length === 0) {
    return [""];
  }

  const firstChar = s.charAt(0);
  if (!isAlphabet(s.charCodeAt(0))) {
    return [
      ...letterCasePermutation(s.slice(1)).map(
        (char: string) => firstChar + char
      ),
    ];
  }
  const perNM1 = letterCasePermutation(s.slice(1));
  return [
    ...perNM1.map((char: string) => firstChar.toLowerCase() + char),
    ...perNM1.map((char: string) => firstChar.toUpperCase() + char),
  ];
}

function isAlphabet(charCode: number) {
  return (
    (charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)
  );
}
