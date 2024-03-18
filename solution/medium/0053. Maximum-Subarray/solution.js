/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function(nums) {
    let maxRet = nums[0], curSum = 0;

    for(let i = 0; i < nums.length; i++) {
        if(curSum < 0) {
            curSum = 0;
        }

        curSum += nums[i];
        maxRet = Math.max(maxRet, curSum);
    }

    return maxRet;
};