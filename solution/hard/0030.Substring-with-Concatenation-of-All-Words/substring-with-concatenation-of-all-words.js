/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
export const findSubstring = function(s, words) {
    let o = {}, unit = words[0].length, ret = [];

    for( let i = 0; i < words.length; i++ ) {
        if( typeof o[words[i]] === 'undefined' ) {
            o[words[i]] = 0;
        }
        o[words[i]] += 1;
    }

    for( let i = 0; i < s.length; i++ ) {
        let stringEnd = i + unit * words.length;

        if( stringEnd > s.length ) {
            break;
        }

        let copyO = {...o};
        let checkString = s.substring(i, stringEnd);
        
        for( let m = 0; m < checkString.length; m += unit ) {
            let wordEnd = m + unit;
            if( wordEnd > checkString.length ) {
                break;
            }

            const w = checkString.substring(m, wordEnd);
            if( copyO[w] ) {
                copyO[w] -= 1;
                if( !copyO[w] ) { 
                    delete copyO[w];
                }
            } else {
                break;
            }
        }

        if( Object.keys(copyO).length === 0 ) {
            ret.push(i);
        }
    }

    return ret;
};