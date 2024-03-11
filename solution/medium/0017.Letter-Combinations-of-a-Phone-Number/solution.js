/**
 * @param {string} digits
 * @return {string[]}
 */
export const letterCombinations = function(digits) {
    const map = {
        "2": "abc", "3": "def", "4": "ghi", "5": "jkl", "6": "mno", "7": "pqrs", "8": "tuv", "9": "wxyz"
    }

    let ret = [];
    if( digits.length > 0 ) {
        backTrack("");
    }
    return ret;

    function backTrack(str) {
        if( str.length === digits.length ) {
            ret.push(str);
            return;
        }

        let letters = map[digits[str.length]];
        for(let i = 0; i < letters.length; i++) {
            backTrack(str + letters[i]);
        }
    }
};