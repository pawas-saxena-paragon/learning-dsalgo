import { coinChange } from "./lc322.coinChange";

describe('coinChange', () => {
    it('should return 20 for [186, 419, 83, 408], 6249', () => {
        expect(coinChange([186, 419, 83, 408], 6249)).toEqual(20);
    });

    it('should return -1 for [2], 3', () => {
        expect(coinChange([2], 3)).toEqual(-1);
    });

    it('should return 3 for [1, 2, 5], 11', () => {
        expect(coinChange([1, 2, 5], 11)).toEqual(3);
    });

    it('should return -1 for [1, 2147483647], 2', () => {
        expect(coinChange([1, 2147483647], 2)).toEqual(-1);
    });
});