/**
 * @param {number} n
 * @return {boolean}
 */
export const isHappy = function(n) {
    function getNext(n) {
        let ret = 0;

        while( n > 0 ) {
            ret += Math.pow( n % 10, 2 );
            n = Math.floor( n / 10 );
        }

        return ret;
    }

    let seen = new Map();
    
    while( n !== 1 ) {
        n = getNext(n);

        if( seen.has(n) ) {
            return false;
        }
        seen.set(n, true);
    }

    return true;
};