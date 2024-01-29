/**
 * 1. drop the space in the tail of `s`
 * 2. traverse the `s` from right to left until space or reaches the begin
 * @param {string} s
 * @return {number}
 */
export const lengthOfLastWord = function(s) {
    while( s[s.length - 1] === ' ' ) {
        s = s.substring(0, s.length - 1);
    }

    let i;
    for( i = s.length - 1; i >= 0; i-- ) {
        if( s[i] === ' ' ) {
            break;
        }
    }
    
    return s.length - i - 1;
};