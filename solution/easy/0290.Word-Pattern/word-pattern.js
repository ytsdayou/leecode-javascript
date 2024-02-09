/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
export const wordPattern = function(pattern, s) {
    let a = new Map(), b = new Map(), arr = s.split(" ");

    if( pattern.length !== arr.length ) return false;

    for( let i = 0; i < pattern.length; i++ ) {
        const l1 = pattern[i], l2 = arr[i];
        if( !a.has(l1) ) {
            a.set( l1, i );
        } 

        if( !b.has(l2) ) {
            b.set(l2, i);
        }

        if( a.get(l1) !== b.get(l2) ) {
            return false;
        }
    }

    return true;
};