// https://youtu.be/ib4BHvr5-Ao?si=hyEi8slzIP_c3fxJ
// export function findMin(arr: number[]): number {}

export function find2Way(arr: number[], start: number, end: number): number {
  if (start === end) {
    return arr[start];
  }

  let mid = Math.floor((start + end) / 2);
  return Math.min(find2Way(arr, start, mid), find2Way(arr, mid + 1, end));
}

export function find3way(arr: number[], start: number, end: number): number {
  if (start === end) {
    return arr[start];
  }
  else if(end - start === 1){
    return Math.min(arr[start], arr[start + 1]);
  }
  else if( end - start === 2){
    return Math.min(arr[start], arr[start + 1], arr[start + 2]);
  }

  let mid1 = Math.floor((start + end) / 3);
  let mid2 = Math.floor(((start + end) * 2) / 3);

  return Math.min(
    find3way(arr, start, mid1),
    find3way(arr, mid1 + 1, mid2),
    find3way(arr, mid2 + 1, end)
  );
}
