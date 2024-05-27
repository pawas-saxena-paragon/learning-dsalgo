// https://leetcode.com/problems/insert-interval/?envType=study-plan-v2&envId=top-interview-150
export function insert(
  intervals: [number, number][],
  newInterval: [number, number]
): [number, number][] {
  const leftIndex = getLeftIntervalIndex(intervals, newInterval);
  const leftInterval = intervals[leftIndex];
  const rightInterval = intervals[leftIndex + 1];
  if (leftIndex === -1) {
  } else if (intervalContain(leftInterval, newInterval)) {
    // no need to do anything
  } else if (intervalOverlap(leftInterval, newInterval)) {
    // new interval end is greater than left interval and they are contiguous . Can be merged
  } else if (leftIndex === intervals.length - 1) {
    // there is no right interval . insert at last
  } else if (intervalOverlap(rightInterval, newInterval)) {
    // merge new interval and right interval
  } else {
    // no overlap with left interval or right interval . Insert after left interval
  }
  return [];
}

export function intervalContain(
  [startSource, endSource]: [number, number],
  [startx, endx]: [number, number]
): boolean {
  return startx >= startSource && endx <= endSource;
}

export function getLeftIntervalIndex(
  intervals: [number, number][],
  newInterval: [number, number]
): number {
  if (newInterval[0] < intervals[0][0]) {
    return -1;
  } else if (newInterval[0] > intervals[intervals.length - 1][0]) {
    return intervals.length - 1;
  }

  return intervals.findIndex(
    ([starti]: [number, number]) => newInterval[0] > starti
  );
}

export function intervalOverlap(
  [startSource, endSource]: [number, number],
  [startx, endx]: [number, number]
): boolean {
  return !(startx > endSource || endx < startSource);
}
