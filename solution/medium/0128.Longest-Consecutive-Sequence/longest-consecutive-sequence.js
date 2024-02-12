/**
 * @param {number[]} nums
 * @return {number}
 */
export const longestConsecutive = function(nums) {
    let s = new Set(nums), ret = 0;

    for( let n of s ) {
        if( !s.has( n - 1 ) ) {
            let ln = 0;
            while( s.has(n + ln) ) {
                ln++;
            }
            ret = Math.max(ret, ln);
        }
    }

    return ret;
};