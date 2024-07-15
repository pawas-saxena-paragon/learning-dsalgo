// https://leetcode.com/problems/gas-station/?envType=study-plan-v2&envId=top-interview-150
// TLE solution
export function canCompleteCircuit(gas: number[], cost: number[]): number {
  for (let i = 0; i < gas.length; i++) {
    if (canCompleteCircuitFromPosition(i, gas, cost)) {
      return i;
    }
  }

  return -1;
}

function canCompleteCircuitFromPosition(
  initalPosition: number,
  gas: number[],
  cost: number[]
): boolean {
  let currentPosition = initalPosition;
  let currentTank = gas[initalPosition];
  do {
    // console.log('tank', currentTank, 'currentPosition', currentPosition, 'cost', cost[currentPosition]);
    const canReachNext = currentTank >= cost[currentPosition];
    if (!canReachNext) {
      return false;
    } else {
      const nextPosition = (currentPosition + 1) % gas.length;
      currentTank -= cost[currentPosition];
      currentPosition = nextPosition;
      currentTank += gas[nextPosition];
    }
  } while (currentPosition !== initalPosition);

  return true;
}
