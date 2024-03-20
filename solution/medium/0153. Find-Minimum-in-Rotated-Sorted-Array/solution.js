/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMin = function(nums) {
    let ret = nums[0], n = nums.length, l = 0, r = n - 1;

    while(l <= r) {
        if( nums[l] < nums[r] ) {
            ret = Math.min(ret, nums[l]);
            return ret;
        }

        let m = Math.floor((l + r) / 2);
        ret = Math.min(ret, nums[m]);

        if( nums[m] >= nums[r] ) {
            l = m + 1;
        } else {
            r = m - 1;
        }
    }

    return ret;
};