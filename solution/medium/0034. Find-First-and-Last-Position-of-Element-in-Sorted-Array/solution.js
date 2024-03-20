/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const searchRange = function(nums, target) {
    let n = nums.length, l = 0, r = n - 1;

    let leftIndex = -1;
    while(l <= r) {
        let m = Math.floor((l + r) / 2);

        if( nums[m] < target ) {
            l = m + 1;
        } else if( nums[m] > target ) {
            r = m - 1;
        } else {
            leftIndex = m;
            r = m - 1;
        }
    }

    let rightIndex = -1;
    l = 0, r = n - 1
    while(l <= r) {
        let m = Math.floor((l + r) / 2);

        if( nums[m] < target ) {
            l = m + 1;
        } else if( nums[m] > target ) {
            r = m - 1;
        } else {
            rightIndex = m;
            l = m + 1;
        }
    }

    return [leftIndex, rightIndex];
};