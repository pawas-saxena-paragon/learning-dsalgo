// https://leetcode.com/problems/product-of-array-except-self/?envType=study-plan-v2&envId=top-interview-150
function productExceptSelf(nums: number[]): number[] {
    const result = {};
    for(let num of nums){

    }
}


/**
 * store product 
 * 
 * brute force will use n2
 *  
 * save something but what
 * have to do it in sigle pass constant number of passes.
 * 
 * 
 * create a map 
 * each element is the key. 
 * keep multiplying current element to all the elements 
 * 
 * does the input have duplictaes
 */
// need to know prefix sum array before the solution 