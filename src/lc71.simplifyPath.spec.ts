import { simplifyPath } from "./lc71.simplifyPath";

describe("simplifyPath", () => {
  it("/home/", () => {
    expect(simplifyPath("/home/")).toEqual("/home");
  });

  it("/../", () => {
    expect(simplifyPath("/../")).toEqual("/");
  });

  it("/home//foo/", () => {
    expect(simplifyPath("/home//foo/")).toEqual("/home/foo");
  });

  it("/a/./", () => {
    expect(simplifyPath("/a/./")).toEqual("/a");
  });

  it("/a/b/..", () => {
    expect(simplifyPath("/a/b/..")).toEqual("/a");
  });

  it("////", () => {
    expect(simplifyPath("/////")).toEqual("/");
  });

  it("/../../../../../a", () => {
    expect(simplifyPath("/../../../../../a")).toEqual("/a");
  });

  it("/a/../.././../../.", () => {
    expect(simplifyPath("/a/../.././../../.")).toEqual("/");
  });

  it("/a/./b/../../c/", () => {
    expect(simplifyPath("/a/./b/../../c/")).toEqual("/c");
  });
});
