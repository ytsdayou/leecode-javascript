/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
export const containsNearbyDuplicate = function(nums, k) {
    let cache = new Map();

    for( let i = 0; i < nums.length; i++ ) {
        if( cache.has(nums[i]) && i - cache.get(nums[i]) <= k ) {
            return true;
        }

        cache.set(nums[i], i);
    }

    return false;
};