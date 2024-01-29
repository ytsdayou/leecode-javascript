/**
 * 1. sort the array
 * 2. compare the begin and the last element
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function(strs) {
    strs = strs.sort();

    const n = Math.min(strs[0].length, strs[strs.length - 1].length);
    
    let ret = "",
        begin = strs[0],
        end = strs[strs.length - 1];

    for( let i = 0; i < n; i++ ) {
        if( begin[i] === end[i] ) {
            ret += begin[i];
        } else {
            break;
        }
    }

    return ret;
};