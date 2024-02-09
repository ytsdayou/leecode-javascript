/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isIsomorphic = function(s, t) {
    let ms = new Map(), mt = new Map();

    for( let i = 0; i < s.length; i++ ) {
        if( ( ms.has(s[i]) && ms.get(s[i]) !== t[i] ) 
            || ( mt.has(t[i]) && mt.get(t[i]) !== s[i] ) ) 
        {
            return false;
        }

        ms.set( s[i], t[i] );
        mt.set( t[i], s[i] );
    }

    return true;
};