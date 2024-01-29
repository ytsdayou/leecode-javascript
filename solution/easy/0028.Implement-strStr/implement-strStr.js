/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
export const strStr = function(haystack, needle) {
    if( needle.length > haystack.length ) return -1;

    let i = 0;
    while( i < haystack.length ) {
        if( haystack[i] === needle[0] ) {
            if( haystack.substring(i, i + needle.length) === needle ) {
                return i;
            }
        }
        i++;
    }

    return -1;
};