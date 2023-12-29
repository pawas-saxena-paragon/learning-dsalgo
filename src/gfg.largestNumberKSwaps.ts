// https://www.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1
// https://www.youtube.com/watch?v=HAWAG7nil9o
export class Solution {
  results;
  constructor() {
    this.results = [];
  }

  findMaximumNum(str, k) {
    this.solve(str, k);
    const maxVal = this.results.length
      ? Math.max(...this.results.map((resulStr) => parseInt(resulStr)))
      : str;

    return maxVal.toString();
  }

  solve(str, k) {
    const numArr = this.stringToNumArr(str);
    if (k === 0 || numArr.length === 1) {
      return str;
    }

    const maxIndex = this.findIndicesOfMaxNumber(numArr, 1).filter(
      (index) => numArr[0] < numArr[index]
    );

    if (maxIndex.length) {
      for (let i = 0; i < maxIndex.length; i++) {
        //swap
        [numArr[maxIndex[i]], numArr[0]] = [numArr[0], numArr[maxIndex[i]]];
        const sol = new Solution();

        this.results.push(
          numArr[0] +
            sol.findMaximumNum(this.numArrToString(numArr.slice(1)), k - 1)
        );
        [numArr[0], numArr[i]] = [numArr[i], numArr[0]]; // reverse swap or backtrack
      }
    } else {
      // skip current element
      const sol = new Solution();

      this.results.push(
        numArr[0] +
          sol.findMaximumNum(this.numArrToString(numArr.slice(1)), k - 1)
      );
    }
  }

  findIndicesOfMaxNumber(arr, startIndex) {
    const maxIndex = [];
    let maxValue = Math.max(...arr.slice(startIndex));
    for (let j = startIndex; j < arr.length; j++) {
      if (arr[j] === maxValue) {
        maxIndex.push(j);
      }
    }
    return maxIndex;
  }

  stringToNumArr(numStr) {
    return numStr.split("").map((ele) => parseInt(ele));
  }

  numArrToString(numArr) {
    return numArr.join("");
  }
}

/**
 * isSolved()
 * isValid()
 * pass by reference
 * a for loop for all choices
 * make a recursion tree
 *
 */
