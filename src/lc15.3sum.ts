// https://leetcode.com/problems/3sum/?envType=study-plan-v2&envId=top-interview-150
function threeSum(nums: number[]): number[][] {
  let store = new Map();
  let results = [];
  for (let i = 0; i < nums.length; i++) {
    const required = 0 - nums[i];
    if (store.has(required)) {
      return results.push[(nums[i], store.get(required))];
    }
    else{
        // 
    }
  }

  return;
}

// find all possible pairs and then loop over array to get the triplets
//
