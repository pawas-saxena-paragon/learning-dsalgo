import {
  findAllSubSequencesMemo,
  arrayIntersect,
  longestCommonSubsequence as longestCommonSubsequence,
} from "./longestCommonSubsequence";
describe("findAllSubSequencesMemo", () => {
  it("input=a", () => {
    expect(findAllSubSequencesMemo("a", {})).toEqual(["a"]);
  });

  it("findAllSubSequencesMemo('')", () => {
    expect(findAllSubSequencesMemo("", {})).toEqual([]);
  });

  it("ab", () => {
    expect(findAllSubSequencesMemo("ab", {}).sort()).toEqual(
      ["a", "b", "ab"].sort()
    );
  });

  it("ade", () => {
    expect(findAllSubSequencesMemo("ade", {}).sort()).toEqual(
      ["a", "d", "e", "ade", "ad", "ae", "de"].sort()
    );
  });

  it("run for zade", () => {
    expect(findAllSubSequencesMemo("zade", {}).sort()).toEqual(
      [
        "a",
        "d",
        "e",
        "z",
        "zade",
        "zad",
        "zae",
        "zde",
        "ade",
        "ad",
        "ae",
        "de",
        "za",
        "zd",
        "ze",
      ].sort()
    );
  });
});

describe("array intersect", () => {
  it("[a,n,v,t], [s,p,n,v]", () => {
    expect(
      arrayIntersect(["a", "n", "v", "t"], ["s", "p", "n", "v"]).sort()
    ).toEqual(["v", "n"].sort());
  });

  it("empty case", () => {
    expect(arrayIntersect([], [])).toEqual([]);
  });

  it("should first empty", () => {
    expect(arrayIntersect([], ["a", "v", "f"])).toEqual([]);
  });

  it("should second empty", () => {
    expect(arrayIntersect(["a", "v", "f"], [])).toEqual([]);
  });

  it("nothing in common", () => {
    expect(arrayIntersect(["a", "n", "v", "t"], ["s", "p", "k"])).toEqual([]);
  });
});

describe("longestCommonSubsequence", () => {
  it("empty strs", () => {
    expect(longestCommonSubsequence("", "")).toEqual(0);
  });

  it("first empty strs", () => {
    expect(longestCommonSubsequence("", "rtt")).toEqual(0);
  });

  it("seond empty strs", () => {
    expect(longestCommonSubsequence("sds", "")).toEqual(0);
  });

  it("simple strs", () => {
    expect(longestCommonSubsequence("za", "a")).toEqual(1);
  });

  it("simple strs 2", () => {
    expect(longestCommonSubsequence("zar", "zr")).toEqual(2);
  });

  it("simple strs 3", () => {
    expect(longestCommonSubsequence("zare", "ae")).toEqual(2);
  });

  it("simple strs 4", () => {
    expect(longestCommonSubsequence("rdghybdxd", "dhbd")).toEqual(4);
  });

  it("non overlapping", () => {
    expect(longestCommonSubsequence("rdghybdxd", "mzlmzl")).toEqual(0);
  });

  it("repeating chars 2as + 3 zs common", () => {
    expect(
      longestCommonSubsequence("aaaabbbbbbbbzzzzzzzz", "aahjzehrzjehjz")
    ).toEqual(5);
  });

  it("repeating chars 2nd test 2as  common", () => {
    expect(
      longestCommonSubsequence("aa", "aah")
    ).toEqual(2);
  });
});
