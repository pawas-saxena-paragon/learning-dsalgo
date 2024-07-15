import { canCompleteCircuit } from "../lc136.gasStation";

describe('gasStation', () => {
    it('should gas = [2,3,4], cost = [3,4,3]', () => {
        expect(canCompleteCircuit([2,3,4],[3,4,3])).toEqual(-1);
    });

    it('should gas = [1,2,3,4,5], cost = [3,4,5,1,2]', () => {
        expect(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2])).toEqual(3);
    });
});