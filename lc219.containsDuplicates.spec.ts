import { containsNearbyDuplicate } from "./lc219.containsDuplicates";

describe("contains duplicates", () => {
  it("nums = [1,2,3,1], k = 3", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1], 3)).toEqual(true);
  });
  it("nums = [1,0,1,1], k = 1", () => {
    expect(containsNearbyDuplicate([1, 0, 1, 1], 1)).toEqual(true);
  });
  it("nums = [1,2,3,1,2,3], k = 2", () => {
    expect(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2)).toEqual(false);
  });
  it("nums = [1,2], k = 2", () => {
    expect(containsNearbyDuplicate([1, 2], 2)).toEqual(false);
  });

  it("nums = [1,2,1 ], k = 1", () => {
    expect(containsNearbyDuplicate([1, 2, 1], 1)).toEqual(false);
  });
});
