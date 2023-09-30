// https://leetcode.com/problems/longest-common-subsequence/

//use tabulation

/**
 *
 * "a", 'abc'
 * [0 a b c]
 * [0 0 0 0]
 * [a 1 1 1]
 * [b 1 2 2]
 *
 *
 *
 */
export function longestCommonSubsequenceRec(
  text1: string,
  text2: string
): number {
  const dp: (number | undefined)[][] = Array(text1.length + 1).fill(
    Array(text2.length + 1).fill(undefined)
  );
  return recurse(text1, text2);

  function recurse(text1: string, text2: string): number {
    // console.log('Called for', text1, text2, 'lengths', text1.length, text2.length);
    const lastIndex1 = text1.length - 1;
    const lastIndex2 = text2.length - 1;
    //base condition
    if (text1.length === 0 || text2.length === 0) {
      return 0;
    } else {
      if (dp[text1.length][text2.length] !== undefined) {
        return dp[text1.length][text2.length];
      }

      if (text1[lastIndex1] === text2[lastIndex2]) {
        dp[text1.length][text2.length] =
          1 + recurse(text1.slice(0, lastIndex1), text2.slice(0, lastIndex2));
        console.log(
          `dp[${text1.length}][${text2.length}] both strings are equal`,
          dp[lastIndex1][lastIndex2],
          "tex1",
          text1,
          "text2",
          text2
        );
      } else {
        const smallStr1 = text1.slice(0, lastIndex1);
        const smallStr2 = text2.slice(0, lastIndex2);
        const taking1 = recurse(smallStr1, text2);
        const taking2 = recurse(text1, smallStr2);
        dp[text1.length][text2.length] = Math.max(taking1, taking2);
        console.log(
          `dp[${text1.length}][${text2.length}]  Max condition`,
          dp[lastIndex1][lastIndex2],
          "tex1",
          text1,
          "text2",
          text2,
          "small text1",
          taking1,
          "small text2",
          taking2,
          "| small str1",
          smallStr1,
          "| small str2",
          smallStr2
        );
      }

      return dp[text1.length][text2.length];
    }
  }
}

export function longestCommonSubsequence1(
  text1: string,
  text2: string
): number {
  const memo: Record<string, string[]> = {};
  const substrText1 = findAllSubSequencesMemo(text1, memo);
  const substrText2 = findAllSubSequencesMemo(text2, memo);
  const commonSequences = arrayIntersect(substrText1, substrText2);
  return commonSequences.length === 0
    ? 0
    : Math.max(...commonSequences.map((seq: string) => seq.length));
}

export function longestCommonSubsequenceCorrect(
  text1: string,
  text2: string
): number {
  const m = text1.length;
  const n = text2.length;

  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n).fill(-1);
  }

  const solve = (a: string, b: string, m: number, n: number) => {
    if (m === 0 || n === 0) return 0;

    if (dp[m - 1][n - 1] != -1) return dp[m - 1][n - 1];

    if (a[m - 1] === b[n - 1])
      return (dp[m - 1][n - 1] = 1 + solve(a, b, m - 1, n - 1));

    return (dp[m - 1][n - 1] = Math.max(
      solve(a, b, m - 1, n),
      solve(a, b, m, n - 1)
    ));
  };

  return solve(text1, text2, text1.length, text2.length);
}

// acne -> ae,an,ac| acne | ane | ace |
// sog -> sog | sg | so | og | o | g
// allSub(st1 prev()) -> prev().map((ele)=> str1 + ele);
// terminate when length of the string is of size 2
export function findAllSubSequencesMemo(
  text: string,
  memo: Record<string, string[]>
): string[] {
  let result: string[] = [];

  if (text.length === 0) {
    result = [];
  } else if (memo[text]) {
    return memo[text];
  } else if (text.length === 1) {
    result = [text];
  } else {
    const firstChar = text.charAt(0);
    const restOfStr = text.slice(1);
    const allSubstringsWithoutFirst = findAllSubSequencesMemo(restOfStr, memo);
    result = allSubstringsWithoutFirst
      .map((char: string) => firstChar + char)
      .concat(allSubstringsWithoutFirst)
      .concat([firstChar]);
  }

  if (memo[text] === undefined) {
    memo[text] = result;
  }
  return result;
}

/**
 * only works for primitive types strings and numbers
 * @param arr1
 * @param arr2
 */
export function arrayIntersect(arr1: string[], arr2: string[]): string[] {
  return arr1.filter((char1: string) => arr2.indexOf(char1) > -1);
}
