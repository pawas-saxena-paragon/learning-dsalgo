// https://leetcode.com/problems/merge-intervals/?envType=study-plan-v2&envId=top-interview-150
export function merge(intervals: [number, number][]): [number, number][] {
  return mergeRec(intervals);
}

/**
 * merge rec wont work . if any 2 are merged then it can lead to cascade of merges. 
 * the rec approach assumes that the cascade can only happen left to right. 
 * at each recursive step we are losing elements in the case of no overlap i.e. current and next
 * Also we cannot gurantee that the problem size reduces at each step
 */
function mergeRec(intervals: [number, number][]): [number, number][] {
  if (intervals.length <= 1) {
    return intervals;
  }
  const current = intervals.shift();
  const next = intervals.shift();

  if (intervalOverlap(current, next)) {
    const combinedElement: [number, number] = [
      Math.min(current[0], next[0]),
      Math.max(next[1], current[1]),
    ];
    intervals.unshift(combinedElement);
    return mergeRec(intervals);
  } else {
    return [current, next, ...mergeRec(intervals)];
  }
}

export function intervalOverlap(
  [start1, end1]: [number, number],
  [start2, end2]: [number, number]
): boolean {
  return !(start2 > end1 || end2 < start1) || !(start1 > end2 || end1 < start2);
}
