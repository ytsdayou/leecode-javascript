/**
 * To optimize this solution, we can utilize a sliding window approach. In the 
 * general case, we would iterate through the string s s.length times and match 
 * the word with the array words using sliding window. However, since all the 
 * strings in the words array are of the same length, we can iterate through s 
 * only word.length times, as the matching string of the (word.length + 1)th 
 * iteration will be a substring of the first iteration.In order to reduce the 
 * time complexity, we can use a hash map to store the appearances of the words, 
 * and utilize a variable cnt to track the number of successful matches we expect. 
 * When cnt is equal to the length of the words array, it indicates that we have 
 * found one of the results.
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