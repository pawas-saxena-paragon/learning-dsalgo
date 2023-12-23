// https://leetcode.com/problems/combinations/?envType=study-plan-v2&envId=top-interview-150
//comeback to this problem later Was not able to understand it.
function combine(n: number, k: number): number[][] {
  if (k === 1) {
    const soln = [];
    for (let i = 1; i <= n; i++) {
      soln.push([i]);
    }
    return soln;
  } else {
    let soln = [];
    for (let i = n; i >= 1; i--) {
      soln = [
        ...soln,
        ...combine(n - 1, k - 1).map((cb: number[]) => [...cb, n]),
      ];
    }
    return soln;
  }
}

/**
 *
 * @param n
 * @param k
 *
 * recursion terminates at selection === k
 * try this https://leetcode.com/problems/combinations/solutions/1141903/clear-and-simple-explanation-with-intuition-100-faster/
 */
function combine2(n: number, k: number): number[][] {
  const solutions: number[][] = [];
  function backTrack(
    remaining: number[],
    k: number,
    selection: number[]
  ): void {
    if (selection.length === k) {
      solutions.push(selection);
    } else {
      remaining.forEach((ele, index) => {
        // check if firstPicked or restEle is undefined;
        selection.push(ele);
        backTrack(remaining.slice(index), k, selection);
        selection.pop();
      });
    }
  }

  const remaining = Array(n)
    .fill(1)
    .map((_value, index) => index + 1);

  backTrack(remaining, k, []);

  return solutions;
}

console.log(combine2(4, 2));

/*
k=3
n4

[1, 2,3], [1,2,4], [1,3,4]

pick first number then keep on picking unique unitill k is reached
replace the last number in this combination 
then replace another one


using recursion
pick one number 's1' now since this one is selected perform selctions for k-1 and remove s1 from the available numbers also.
when k = 1  then selection is each number 1 times
*/



function combine3(n: number, k: number): number[][] {
    const c = new Combine(n, k);
    c.solve(n);

    return c.solution;
};


class Combine {
  solution: number[][] = [];
  constructor(private n: number, private k: number){

  }

  boundingFn(){

  }


  getNextMoves(n,k){

  }


  solve(n: number): void{
    // select first k numbers
    // [1 to k]
    if(n === this.k){
      this.solution.push([...Array(this.k).fill(0).map((_ele, index)=> index + 1)]);
      return 
    }

    if(this.boundingFn(n)){
      return;
    }

    while(){
      for(let move of this.getNextMoves(n)){
        this.solve(n-1);
      }
    }


  }
}