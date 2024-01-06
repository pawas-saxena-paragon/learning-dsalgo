// https://leetcode.com/problems/simplify-path/?envType=study-plan-v2&envId=top-interview-150
export function simplifyPath(path: string): string {
  const elements = path
    .split("/")
    .filter((dir: string) => dir)
    .filter((dir: string) => dir !== ".");

  let result = [];
  for (let dir of elements) {
    if (dir === "..") {
      result.length && result.pop();
    } else {
      result.push(dir);
    }
  }
  return "/" + result.join("/");
}
