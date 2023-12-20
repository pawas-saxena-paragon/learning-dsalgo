import { uniquePaths } from "./lc62.uniquePaths";

describe("unique paths", () => {
  it(" m = 3, n = 7", () => {
    expect(uniquePaths(3, 7)).toEqual(28);
  });
});
