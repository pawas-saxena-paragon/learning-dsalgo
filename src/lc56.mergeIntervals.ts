function merge(intervals: number[][]): number[][] {
  let results = [];
  for (let i = 0; i < intervals.length; i++) {
    const [iStart, iEnd] = intervals[i];
    const overLappingIndex = checkOverlap(results, [iStart, iEnd]);
    if (overLappingIndex !== null) {
      mergeSingleInterval([iStart, iEnd], overLappingIndex);
    } else {
      results.push([iStart, iEnd]);
    }
  }
  return results;

  function mergeSingleInterval(
    [start, end]: [number, number],
    index: number
  ): void {
    const [curStart, curEnd] = results[index];
    const newInterval = [Math.min(curStart, start), Math.max(curEnd, end)];
    results[index] = newInterval;
  }
}

export function checkOverlap(arr: number[][], [start, end]: [number, number]) {
  const overlappingIntervalIndex = arr.findIndex(([iStart, iEnd]: number[]) =>
    isOverlapIntervals([iStart, iEnd], [start, end])
  );

  return overlappingIntervalIndex > -1 ? overlappingIntervalIndex : null;
}

function isOverlapIntervals(
  [start1, end1]: [number, number],
  [start2, end2]: [number, number]
): boolean {
  const oneFirstOverlap = end1 >= start2 && start1 <= start2;
  const twoFirstOverlap = end2 >= start1 && start2 <= start1;
  const twoContainsOne = start2 <= start1 && end2 >= end1;
  const oneContainsTwo = start1 <= start2 && end1 >= end2;

//   console.log(
//     "oneFirstOverlap",
//     oneFirstOverlap,
//     "twoFirstOverlap",
//     twoFirstOverlap,
//     "twoContainsOne",
//     twoContainsOne,
//     "oneContainsTwo",
//     oneContainsTwo
//   );

  return Boolean(
    oneFirstOverlap || twoFirstOverlap || twoContainsOne || oneContainsTwo
  );
}
