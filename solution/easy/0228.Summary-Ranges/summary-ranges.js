/**
 * @param {number[]} nums
 * @return {string[]}
 */
export const summaryRanges = function(nums) {
    let ret = [], range = [];

    for( let i = 0; i < nums.length; i++ ) {
        range.push(nums[i]);

        if( i + 1 === nums.length || nums[i + 1] - 1 > nums[i] ) {
            const n = range.length;
            if( range[0] === range[n - 1] ) {
                ret.push(range[0].toString())
            } else {
                ret.push(`${range[0]}->${range[n-1]}`);
            }
            range = [];
        }
    }

    return ret;
};