// https://leetcode.com/problems/simplify-path/?envType=study-plan-v2&envId=top-interview-150
export function simplifyPath(path: string): string {
  const elements = path
    .split("/")
    .filter((dir: string) => dir)
    .filter((dir: string) => dir !== ".");

  let result = [];
  let elementsToPop = 0;
  while (elements.length !== 0) {
    const lastDir = elements[elements.length - 1];
    if (lastDir === "..") {
      elementsToPop++;
      elements.pop();
      // pop
    } else {
      // make elementsToPop 0
      while (elementsToPop > 0) {
        elements.pop();
        elementsToPop--;
      }
      const lastEle = elements.pop();
      result.unshift(lastEle);
    }
  }
  return "/" + result.join("/");
}
