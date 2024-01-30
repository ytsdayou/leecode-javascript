/**
 * We can efficiently solve this problem using two pointers, while ensuring careful 
 * consideration of boundary conditions. Specifically, when s is empty, the answer 
 * will always be true. Conversely, the answer will always be false when t is empty, 
 * or when the length of s is greater than the length of t.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = function(s, t) {
    if( !s.length ) return true;
    if( !t.length || s.length > t.length ) return false;

    let i = 0, j = 0;

    while( j < t.length ) {
        if( t[j] === s[i] ) {
            if( i === s.length - 1 ) {
                return true;
            } else {
                i++;
            }
        }

        j++;
    }

    return false;
};