/**
 * @param {number[]} nums
 * @return {number[][]}
 */
export const permute = function(nums) {
    let ret = [];
    backTrack([]);
    return ret;

    function backTrack(cur) {
        if( cur.length === nums.length ) {
            ret.push(cur);
            return;
        }

        for(let i = 0; i < nums.length; i++) {
            if( cur.indexOf( nums[i] ) === -1 ) {
                const next = [...cur];
                next.push(nums[i]);
                backTrack(next);
            }
        }
    }
};