/**
 * @param {string} s
 * @return {string}
 */
export const reverseWords = function(s) {
    s = s.trim();

    let res = "",
        word = "";

    for( let i = s.length - 1; i >= 0; i-- ) {
        if( s[i] === " " ) {
            if( word !== "" ) {
                res += " " + word;
            }
            word = "";
            continue;
        }

        word = s[i] + word;
    }

    res += " " + word;
    return res.trim();
};