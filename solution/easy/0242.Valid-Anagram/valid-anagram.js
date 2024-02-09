/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isAnagram = function(s, t) {
    if( s.length !== t.length ) return false;

    let total = new Map();

    for( let i = 0; i < s.length; i++ ) {
        total.set( s[i], ( total.get(s[i]) || 0 ) + 1 );
    }

    for( let i = 0; i < t.length; i++ ) {
        if( !total.has(t[i]) || total.get(t[i]) <= 0 ) {
            return false;
        }

        total.set( t[i], total.get(t[i]) - 1 );
    }

    return true;
};