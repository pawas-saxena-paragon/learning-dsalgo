// https://practice.geeksforgeeks.org/problems/first-negative-integer-in-every-window-of-size-k3345/1
// https://www.youtube.com/watch?v=uUXXEgK2Jh8&list=PL_z_8CaSLPWeM8BDJmIYDaoQ5zuwyxnfj&index=5
export function printFirstNegativeInteger(n: number, k: number, arr: number[]): number[] {
  const result = [];
  let start = 0;
  let end = 0;

  while (end < n) {
    if (end - start + 1 === k) {
      //window size reached. compute something and move to next window
      for (let i = start; i <= end; i++) {
        if (arr[i] < 0) {
          result.push(arr[i]);
          break;
        } else {
          if (i === end) {
            result.push(0);
          }
        }
      }
      start++;
      end++;
    } else {
      end++;
    }
  }

  return result;
}
