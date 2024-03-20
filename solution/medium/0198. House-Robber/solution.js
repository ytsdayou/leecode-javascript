/**
 * @param {number[]} nums
 * @return {number}
 */
export const rob = function(nums) {
    let l1 = 0, l2 = 0;

    for(let i = 0; i < nums.length; i++) {
        let tmp = Math.max(l1 + nums[i], l2);
        l1 = l2;
        l2 = tmp;
    }

    return l2;
};