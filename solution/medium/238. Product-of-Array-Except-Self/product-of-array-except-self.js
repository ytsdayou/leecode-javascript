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

/**
 * NO need to store prefix and suffix
 * To achieve O(1) extra space complexity, we can utilize a single variable, 'cur', 
 * initialized to 1, to store either the prefix or suffix product. This approach is 
 * feasible because we can derive the prefix product of the element at index 'n - 1' 
 * by obtaining the prefix product of the element at index 'n - 2', which, in turn, 
 * can be derived from the prefix product of the element at index 'n - 3'. This 
 * iterative method also applies to obtaining the suffix product.
 * 
 * 1. Initialize a result array and fill it with 1.
 * 2. Traverse the array from left to right, updating the result array with the prefix 
 *    product at position 'i'.
 * 3.Traverse the array from right to left, updating the value at position 'i' by 
 *    multiplying it with the suffix product.
 * 
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf2 = function(nums) {
    let n = nums.length,
        ans = new Array(n).fill(1);
        
    let cur = 1;
    for( let i = 0; i < n; i++ ) {
        ans[i] *= cur;
        cur *= nums[i];
        ans[i] = ans[i] ? ans[i] : 0;
    }

    cur = 1;
    for( let i = n - 1; i >= 0; i-- ) {
        ans[i] *= cur;
        cur *= nums[i];
        ans[i] = ans[i] ? ans[i] : 0;
    }

    return ans;
}