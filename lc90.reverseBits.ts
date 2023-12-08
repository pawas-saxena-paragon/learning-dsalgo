// https://leetcode.com/problems/reverse-bits/?envType=study-plan-v2&envId=top-interview-150
//code from solutions in lc
function reverseBits(n: number): number {
  let ans = 0;

  for (let i = 0; i < 32; i++) {
    ans = (ans << 1) + (n & 1);
    n >>>= 1;
  }

  return (ans >>>= 0);
}

// chatgpt explanation

// result = (result << 1) | (number & 1);
// number = number >>> 1;
// Left Shift (result << 1):

// result is left-shifted by one position. This operation effectively moves the existing bits of result to the left, creating space for the next bit.
// For example, if result is 010 (binary), after left-shifting by one position, it becomes 100.
// Bitwise OR (|) with Least Significant Bit (number & 1):

// number & 1 extracts the least significant bit of the original number.
// Bitwise OR (|) combines the shifted result and the extracted bit, setting the least significant bit of result to the current bit of the original number.
// For example, if the least significant bit of number is 1 and result is 100, the result becomes 101.
// Right Shift (number >>> 1):

// number is right-shifted by one position. This operation discards the least significant bit of the original number, effectively moving to the next bit for the next iteration.
// For example, if number is 1010 (binary), after right-shifting, it becomes 0101.
// Repeat:

// The process is repeated in the loop until all bits of the original number are processed.
// By performing these operations iteratively, the algorithm effectively reverses the bits of the original number. 
// The left shift creates space for the next bit, the bitwise OR sets the least significant bit correctly, and the right shift moves to the next bit in the next iteration.