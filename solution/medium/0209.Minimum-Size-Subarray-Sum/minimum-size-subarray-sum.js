/**
 * To efficiently solve this problem, we can utilize the sliding-window approach:
 * 1. Initialize two pointers, 'l' and 'r', to mark the current subarray.
 * 2. Create two variables, 'total' and 'ret', representing the sum of the elements 
 *    in the window and the length of the minimum subarray, respectively.
 * 3. If the 'total' variable is greater than or equal to the target, we update the 
 *    'ret' variable if the current window length is the minimum so far, then move the 
 *    left pointer one step forward and update the 'total' variable. Conversely, if the 
 *    'total' variable is less than the target, we move the right pointer one step forward 
 *    and update the 'total' variable accordingly.
 * 4. Repeat step 3 until the right pointer traverses all the elements in the 'nums' array.
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
export const minSubArrayLen = function(target, nums) {
    const n = nums.length;

    if( n === 1 && nums[0] < target ) return 0;
    if( nums[0] >= target || nums[n - 1] >= target ) return 1;

    let ret = 0, l = 0, r = 1, total = nums[l] + nums[r];
    while( r < n ) {
        if( nums[r] >= target ) return 1;

        if( total >= target ) {
            ret = ret === 0 ? r - l + 1 : Math.min(ret, r - l + 1);
            total -= nums[l];
            l++;
        } else {
            r++;
            total += r < n ? nums[r] : 0;
        }
    }

    return ret;
};