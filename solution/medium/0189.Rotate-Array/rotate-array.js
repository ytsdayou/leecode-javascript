/**
 * Define a variable `n` represent the length of the nums array. According to 
 * the problem description, the value of k may be greater than n. Therefore, 
 * as a first step, we should set the value of k to k modulo `n`. This step is 
 * important because it ensures that the rotation will move the same number of 
 * steps as determined by the mod operation.
 * We can solve this problem by placing every element to their expected position. 
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;

    let start = 0,
        next = k % n,
        tmp = nums[0];

    for( let i = 0; i < n; i++ ) {
        let tmp2 = nums[next];
        nums[next] = tmp;

        if( next === start ) {
            start++;
            next = ( start + k ) % n;
            tmp = nums[start];
        } else {
            next = ( next + k ) % n;
            tmp = tmp2;
        }
    }
};