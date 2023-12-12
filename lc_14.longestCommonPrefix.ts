function longestCommonPrefix(strs: string[]): string {
  const shortestString: string = strs.reduce((prev, curr) => {
    return curr.length < prev.length ? curr : prev;
  });

  let commonShortestPrefix = "";
  for (let i = 0; i < shortestString.length; i++) {
    if (strs.every((char) => char[i] === shortestString[i])) {
      commonShortestPrefix += shortestString[i];
    } else {
      break;
    }
  }

  return commonShortestPrefix;
}