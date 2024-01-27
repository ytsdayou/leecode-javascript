/**
 * Store Prefix Product and Suffix Product
 * We can solve this problem by storing the prefix product of all elements 
 * before each element, as well as the suffix product of all elements after 
 * each element. The prefix product of each element can be calculated using 
 * the prefix result of the element immediately preceding it. Similarly, the 
 * suffix product of each element can be calculated using the suffix result 
 * of the element following it. Therefore, we can obtain the answer by 
 * multiplying the prefix product by the suffix product.
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = function(nums) {
    let n = nums.length,
        prefix = [],
        suffix = [],
        ans = [];

    prefix[0] = 1;
    suffix[n - 1] = 1;

    // get prefix
    for(let i = 1; i < n; i++) {
        prefix[i] = prefix[i-1] * nums[i - 1];
    }

    for(let i = n - 2; i >= 0; i--) {
        suffix[i] = suffix[i+1] * nums[i+1];
    }

    for( let i = 0; i < n; i++ ) {
        ans[i] = prefix[i] * suffix[i];
        ans[i] === -0 && ( ans[i] = 0 );
    }

    return ans;
};