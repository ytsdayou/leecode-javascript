/**
 * @param {number[]} nums
 * @return {number}
 */
export const findPeakElement = function(nums) {
    let n = nums.length, l = 0, r = n - 1;

    while(l <= r) {
        let m = Math.floor((l + r) / 2);

        // left neighbor greater
        if( m > 0 && nums[m - 1] > nums[m] ) {
            r = m - 1;
        } else if( m < n - 1 && nums[m] < nums[m + 1] ) {
            // right neighbor greater
            l = m + 1;
        } else {
            return m;
        }
    }
};