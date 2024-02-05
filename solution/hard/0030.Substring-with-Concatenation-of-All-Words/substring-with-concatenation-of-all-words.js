/**
 * sliding window
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
export const findSubstring2 = function(s, words) {
    let o = new Map(), unit = words[0].length, n = words.length, ret = [];

    for( let i = 0; i < n; i++ ) {
        o.set(words[i], ( o.get(words[i]) || 0 ) + 1 );
    }

    for( let i = 0; i < unit; i++ ) {

        let cnt = 0, wd = new Map();

        for( let j = i; j + unit <= s.length; j += unit ) {
            
            if( j - i >= unit * n ) { // window should shift right
                const outWord = s.substring(j - unit * n, j - unit * n + unit);
                wd.set(outWord, ( wd.get(outWord) || 0 ) - 1 );
                if( o.get(outWord) && wd.get(outWord) < o.get(outWord) ) cnt--;
            }

            const inWord = s.substring(j, j + unit);
            wd.set(inWord, ( wd.get(inWord) || 0 ) + 1 );

            if( wd.get(inWord) <= o.get(inWord) ) cnt++;

            if( cnt === n ) ret.push(j - (n - 1) * unit);
        }

    }

    return ret;
}