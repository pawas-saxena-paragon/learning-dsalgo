import {
  getLeftIntervalIndex,
  insert,
  intervalContain,
  intervalOverlap,
} from "./lc57.insertInterval";

describe("insert intervals", () => {
  describe("#getLeftIntervalIndex", () => {
    it("[[1,3],[6,9]] , [2,4]", () => {
      expect(
        getLeftIntervalIndex(
          [
            [1, 3],
            [6, 9],
          ],
          [2, 4]
        )
      ).toEqual(0);
    });

    it("[[1,3],[6,9]] , [7,10]", () => {
      expect(
        getLeftIntervalIndex(
          [
            [1, 3],
            [6, 9],
          ],
          [7, 10]
        )
      ).toEqual(1);
    });

    it("[[1,3],[6,9]] , [0,1]", () => {
      expect(
        getLeftIntervalIndex(
          [
            [1, 3],
            [6, 9],
          ],
          [0, 1]
        )
      ).toEqual(-1);
    });
  });

  describe("#intervalContain", () => {
    it("[1,3] , [2,4]", () => {
      expect(intervalContain([1, 3], [2, 4])).toEqual(false);
    });

    it("[1,3] , [1,2]", () => {
      expect(intervalContain([1, 3], [1, 2])).toEqual(true);
    });

    it("[1,3] , [1,3]", () => {
      expect(intervalContain([1, 3], [1, 3])).toEqual(true);
    });

    it("[1,3] , [-1,1]", () => {
      expect(intervalContain([1, 3], [-1, 1])).toEqual(false);
    });

    it("[1,3] , [-1,0]", () => {
      expect(intervalContain([1, 3], [-1, 0])).toEqual(false);
    });

    it("[1,3] , [4,5]", () => {
      expect(intervalContain([1, 3], [4, 5])).toEqual(false);
    });
  });

  describe("#intervalOverlap", () => {
    it("[1,3] , [2,4]", () => {
      expect(intervalOverlap([1, 3], [2, 4])).toEqual(true);
    });

    it("[1,3] , [1,2]", () => {
      expect(intervalOverlap([1, 3], [1, 2])).toEqual(true);
    });

    it("[1,3] , [1,3]", () => {
      expect(intervalOverlap([1, 3], [1, 3])).toEqual(true);
    });

    it("[1,3] , [-1,1]", () => {
      expect(intervalOverlap([1, 3], [-1, 1])).toEqual(true);
    });

    it("[1,3] , [-1,0]", () => {
      expect(intervalOverlap([1, 3], [-1, 0])).toEqual(false);
    });

    it("[1,3] , [4,5]", () => {
      expect(intervalOverlap([1, 3], [4, 5])).toEqual(false);
    });
  });

  describe("#insert", () => {
    it("[[1,3],[6,9]], [2,5]", () => {
      expect(
        insert(
          [
            [1, 3],
            [6, 9],
          ],
          [2, 5]
        )
      ).toEqual([
        [1, 5],
        [6, 9],
      ]);
    });

    it("[[1,2],[3,5],[6,7],[8,10],[12,16]], [2,5]", () => {
      expect(
        insert(
          [
            [1, 2],
            [3, 5],
            [6, 7],
            [8, 10],
            [12, 16],
          ],
          [4, 8]
        )
      ).toEqual([
        [
          [1, 2],
          [3, 10],
          [12, 16],
        ],
      ]);
    });
  });
});
