/**
 * We can solve this problem by using stack, if the length of `s` is an odd number,
 * it will be false. We push the character into stack when it is a left symbol, and
 * we pop a caracter from the stack when encountering a right symbol, then we match
 * them, if they are not same type of brackets, we return false. 
 * Repeat this process, if the stack is empty it means `s` is a valid string.
 * @param {string} s
 * @return {boolean}
 */
export const isValid = function(s) {
    if( s.length % 2 !== 0 ) return false;

    let stack = [], o = {'}': '{', ']': '[', ')': '('};

    for(let i = 0; i < s.length; i++) {
        if( ['{', '(', '['].indexOf(s[i]) > -1 ) {
            stack.push(s[i]);
        } else {
            const ele = stack.pop();
            if( !ele ) return false;

            
            if( o[s[i]] !== ele ) {
                return false;
            }
        }
    }

    return stack.length === 0;
};