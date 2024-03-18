/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const searchInsert = function(nums, target) {
    let n = nums.length, l = 0, r = n - 1;

    while(l <= r) {
        let mid = Math.floor(l + r);

        if( nums[mid] === target ) {
            return mid;
        }

        if( nums[mid] > target ) {
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }

    return l;
};