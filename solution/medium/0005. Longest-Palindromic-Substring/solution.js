/**
 * @param {string} s
 * @return {string}
 */
export const longestPalindrome = function(s) {
    let ret = "";
    for(let i = 0; i < s.length; i++) {
        let l = i - 1, center = s[i];
        while(i + 1 < s.length && s[i+1] === s[i] ) {
            center += s[i+1];
            i++;
        }
        let r = i + 1;
        while( s[l] !== undefined && s[r] !== undefined && s[l] === s[r] ) {
            center = s[l] + center + s[r];
            l--;
            r++;
        }
        ret = center.length > ret.length ? center : ret;
    }

    return ret;
};