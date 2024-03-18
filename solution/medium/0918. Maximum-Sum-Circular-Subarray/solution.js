/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubarraySumCircular = function(nums) {
    let n = nums.length, globalMax = nums[0], globalMin = nums[0],
        curMax = 0, curMin = 0, total = 0;

    for(let i = 0; i < n; i++) {
        curMax = Math.max(curMax + nums[i], nums[i]);
        curMin = Math.min(curMin + nums[i], nums[i]);
        total += nums[i],
        globalMax = Math.max(globalMax, curMax);
        globalMin = Math.min(globalMin, curMin);
    }

    if( globalMax > 0 ) {
        return Math.max(total - globalMin, globalMax);
    } else {
        return globalMax;
    }
};