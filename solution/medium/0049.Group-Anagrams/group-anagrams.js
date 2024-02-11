/**
 * @param {string[]} strs
 * @return {string[][]}
 */
export const groupAnagrams = function(strs) {
    let ret = [], cache = {}, n = strs.length;

    for( let i = 0; i < n; i++ ) {
        let arr = Array.from(strs[i]);
        let key = arr.sort().join("");
        if( !cache[key] ) {
            cache[key] = [];
        }
        cache[key].push(strs[i]);
    }

    for( let key in cache ) {
        ret.push(cache[key]);
    }

    return ret;
};