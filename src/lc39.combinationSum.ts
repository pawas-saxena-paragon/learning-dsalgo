// https://leetcode.com/problems/combination-sum/?envType=study-plan-v2&envId=top-interview-150
export function combinationSum(
  candidates: number[],
  target: number
): number[][] {
  candidates.sort();
  const sol = new Solution(
    candidates.filter((cand: number) => cand <= target),
    target
  );
  return sol.result;
}

class Solution {
  result: number[][];
  constructor(private candidates: number[], private target: number) {
    this.result = [];
    this.getCombination();
  }

  getCombination(): void {
    if (this.target === 0 || this.candidates.length === 0) {
      return;
    }

    for (let cand of this.candidates) {
      const div = Math.floor(this.target / cand);

      if (div === 0) {
        console.log("div xeeo");
        continue;
      }

      // why not consider it zero times ?
      for (let i = div; i > 0; i--) {
        const nextTarget = this.target - cand * i;
        const nextCandidates =
          this.candidates.length === 1
            ? []
            : this.candidates
                .slice(1)
                .filter((cand: number) => cand <= nextTarget);

        const sol = new Solution(nextCandidates, nextTarget);
        const nextSoln: number[][] = sol.result;
        console.log("here", nextSoln, nextCandidates, nextTarget);
        // if (nextSoln.length === 0) {
        //   // if nextTarget is zero (complete divibility) then the base cond. will send back empty response
        //   continue;
        // }
        this.result.push(...this.prefix(Array(i).fill(cand), nextSoln)); // todo check if the result of zero length is covered here
      }
    }
  }

  prefix(prefixArr: number[], source: number[][]): number[][] {
    return source.map((eleArr: number[]) => [...prefixArr, ...eleArr]);
  }
}

/**
 * take one element A. Divide target by A and get the remaninder. So A can be taken maximum number (target / A) times
 * now we can consider each possibility and repeat the same process with the remainder.
 * But this is going to be painfully slow.
 * the largest number would leave a larger remainder so there would be more room for others. May be
 * how can i invalidate some of the choices ?pick one candidate & 
 * take min of the remaning elements and if the remainder is smaller than the min element then i can eleminate
 * some of the choices .
 * Instead of calculating the min each time i should sort the input . Now the invalid condition wont ever happen
 * in case of the target being smaller than the smallest element of the array we cannot use any candidates. In fact we can only use those
 * candidates that are smaller than or equal to the target
 */
