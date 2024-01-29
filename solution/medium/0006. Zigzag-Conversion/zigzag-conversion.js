/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
export const convert = function(s, numRows) {
    let o = {}, ret = '';
    while(s) {
        for(let i = 0; i < numRows; i++) {
            if(!s) {
                break;
            }
            if( !o[i] ) {
                o[i] = "";
            }
            o[i] += s[0];
            s = s.substring(1);
        }
        for(let j = numRows - 2; j > 0; j--) {
            if(!s) {
                break;
            }
            o[j] += s[0];
            s = s.substring(1);
        }
    }

    for( let i in o ) {
        ret += o[i];
    }

    return ret;
};