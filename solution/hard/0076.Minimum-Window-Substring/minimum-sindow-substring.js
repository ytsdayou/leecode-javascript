/**
 * sliding window
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
export const minWindow = function(s, t) {
    let minWindow = "", cnt = 0, m = s.length, n = t.length, minLength = m, total = new Map();

    for( let i = 0; i < n; i++ ) {
        total.set( t[i], ( total.get(t[i]) || 0 ) + 1 );
    }

    let l = 0, r = 0, wdw = new Map();
    while( r < m ) {
        const inWord = s[r];
        wdw.set( inWord, ( wdw.get(inWord) || 0 ) + 1 );
        if( total.has(inWord) && wdw.get(inWord) <= total.get(inWord) ) {
            cnt++;
        }

        while( cnt >= n ) {
            minWindow = minLength > r - l ? s.substring(l, r + 1) : minWindow;
            minLength = minWindow.length;

            const outWord = s[l];
            wdw.set( outWord, wdw.get(outWord) - 1 );

            if( total.has(outWord) && wdw.get(outWord) < total.get(outWord) ) {
                cnt--;
            }

            l++;
        }

        r++;
    }

    return minWindow;
};