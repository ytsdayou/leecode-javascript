/**
 * @param {number} n
 * @return {string[]}
 */
export const generateParenthesis = function(n) {
    let ret = [];
    backTrack("(", n - 1, n);
    return ret;

    function backTrack(str, left, right) {
        if( str.length === n * 2 ) {
            ret.push(str);
            return;
        }

        if( left === right ) {
            backTrack(str + "(", left - 1, right);
        } else if( left === 0 ) {
            backTrack(str + ")", left, right - 1);
        } else {
            backTrack(str + "(", left - 1, right);
            backTrack(str + ")", left, right - 1);
        }
    }
};