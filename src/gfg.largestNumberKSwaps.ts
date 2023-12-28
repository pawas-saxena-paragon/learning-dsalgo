// https://www.geeksforgeeks.org/problems/largest-number-in-k-swaps-1587115620/1
// https://www.youtube.com/watch?v=HAWAG7nil9o
export class Solution {
  //Function to find the largest number after k swaps.
  findMaximumNum(str, k) {
    //your code here
    const numArr = str.split("").map((ele) => parseInt(ele));
    let currentSwaps = 0;
    for (let i = 0; i < numArr.length - 1; i++) {
      if (currentSwaps < k) {
        let maxNumIndex = i + 1;
        for (let j = i + 1; j < numArr.length; j++) {
          if (numArr[maxNumIndex] < numArr[j]) {
            maxNumIndex = j;
          }
        }

        if (numArr[maxNumIndex] > numArr[i]) {
          // swap
          currentSwaps++;
          [numArr[i], numArr[maxNumIndex]] = [numArr[maxNumIndex], numArr[i]];
        }
      } else {
        break; // no more swaps
      }
    }

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
