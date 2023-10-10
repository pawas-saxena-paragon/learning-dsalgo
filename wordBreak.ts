export function wordBreak(s: string, wordDict: string[]): boolean {
  const innerDpArr = Array(wordDict.length + 1).fill(undefined);
  //   let dp = Array(s.length + 1).fill(innerDpArr);
  let dp: Record<string, (boolean | undefined)[]> = {};
  return solve(s, wordDict, wordDict.length);

  function solve(
    str: string,
    wordDict: string[],
    lastIndexInDict: number
  ): boolean {
    console.log("call", str, wordDict, lastIndexInDict);
    if (str.length === 0) {
      return true;
    } else if (lastIndexInDict === 0) {
      return false;
    }

    if (
      dp[str] !== undefined &&
      Array.isArray(dp[str]) &&
      dp[str][lastIndexInDict] !== undefined
    ) {
      return dp[str][lastIndexInDict];
    }

    const resultChooseLastWord = solve(
      str.replaceAll(wordDict[lastIndexInDict - 1], ""),
      wordDict,
      lastIndexInDict - 1
    );

    const resultNotChooseLastWord = solve(str, wordDict, lastIndexInDict - 1);

    console.log(
      "choosing",
      wordDict[lastIndexInDict - 1],
      "string becomes",
      str.replaceAll(wordDict[lastIndexInDict - 1], "")
    );
    console.log("not choosing", wordDict[lastIndexInDict - 1]);

    if (dp[str] === undefined) {
      dp[str] = innerDpArr;
    }
    return (dp[str][lastIndexInDict] =
      resultChooseLastWord || resultNotChooseLastWord);
  }
}
