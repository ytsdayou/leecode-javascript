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

/**
 * 1. Reverse the entire array.
 * 2. Split the array into two parts by slicing it at index k modulo n, where n 
 *    represents the length of the nums array. The first part consists of elements 
 *    from index 0 to k - 1, and the second part encompasses elements from index k 
 *    to the end of the array.Perform a reverse operation on each of the two parts separately.
 */
export const rotate2 = function(nums, k) {
    let n = nums.length;
        k = k % n;

    if( k === 0 ) return nums;
    if( n === 1 ) return nums;

    reverse(nums, 0, n - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, n - 1);
}

function reverse(nums, start, end) {
    let n = end - start + 1,
        t = Math.floor( n / 2 );
    for( let i = 0; i < t; i++ ) {
        let j = start + i, 
            tmp = nums[j];
        
        nums[j] = nums[end];
        nums[end--] = tmp;
    }
}