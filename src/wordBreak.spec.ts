import { wordBreak } from "./wordBreak";

describe("wordBreak", () => {
  it('s = "leetcode", wordDict = ["leet","code"]', () => {
    expect(wordBreak("leetcode", ["leet", "code"])).toEqual(true);
  });

  it('s = "applepenapple", wordDict = ["apple","pen"]', () => {
    expect(wordBreak("applepenapple", ["apple", "pen"])).toEqual(true);
  });

  it('s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]', () => {
    expect(
      wordBreak("catsandog", ["cats", "dog", "sand", "and", "cat"])
    ).toEqual(false);
  });

  it('s = "", wordDict = ["cats","dog","sand","and","cat"]', () => {
    expect(wordBreak("", ["cats", "dog", "sand", "and", "cat"])).toEqual(true);
  });

  it('s = "catsandog", wordDict = [""]', () => {
    expect(wordBreak("catsandog", [])).toEqual(false);
  });

  it('s= "dogs" wordDict=["dog","s","gs"]', ()=>{
    expect(wordBreak("dogs", ["dog","s","gs"])).toEqual(true);
  });

  it('s= "aaaaaaa" wordDict=["aaaa","aaa"]', ()=>{
    expect(wordBreak("aaaaaaa", ["aaaa","aaa"])).toEqual(true);
  });

});
