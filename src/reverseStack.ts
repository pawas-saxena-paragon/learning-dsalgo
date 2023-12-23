export function reverseStack(arr: number[]): number[] {
  if (arr.length === 0) {
    return [];
  }

  return [arr[arr.length - 1], ...reverseStack(arr.slice(0, arr.length - 1))];
}
