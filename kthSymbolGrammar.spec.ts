import { kthGrammar } from "./kthSymbolGrammar";
describe("kthSymbolGrammar", () => {
  it("n = 1, k = 1", () => {
    expect(kthGrammar(1, 1)).toEqual(0);
  });

  it("n = 2, k = 1", () => {
    expect(kthGrammar(2, 1)).toEqual(0);
  });

  it("n = 2, k = 2", () => {
    expect(kthGrammar(2, 2)).toEqual(1);
  });

  it("n = 30, k = 434991989", () => {
    expect(kthGrammar(30, 434991989)).toEqual(1);
  });
});
