/**
 * 1. we iterate through the string `s` and push the numbers, operators into the 
 *    stack. When we encoutering the symbol ')' pop the nodes until we seen the '('.
 *    The nodes that pop out we will push them into another stack, Then we caculate the 
 *    result by using the another stack and push the result into the fist stack again.
 * 2. When we iterate over the whole string `s`, we will caculate the result by using 
 *    the fist stack, that will be the final answer.
 * @param {string} s
 * @return {number}
 */
export const calculate = function(s) {
    function _calSub(arr) {
        let l = 0;
        while(arr.length > 0) {
            let ele = arr.pop();
            if( ['+','-'].indexOf(ele) > -1 ) {
                let r = arr.pop();
                if( ele === '+' ) {
                    l += Number(r);
                } else {
                    l -= Number(r);
                }
            } else {
                l = Number(ele);
            }
        }
        return l;
    }

    let stack = [], i = 0;
    
    while( i < s.length ) {
        if( s[i] === " " ) {
            
        } else if( ['+', '-', '('].indexOf(s[i]) > -1 ) {
            stack.push(s[i]);
        } else if( s[i] === ')' ) {
            let sub = [], ele = stack.pop();
            while( ele !== '(' ) {
                sub.push(ele);
                ele = stack.pop();
            }
            stack.push( _calSub(sub) );
        } else {
            let num = s[i];
            while( i + 1 < s.length && /[0-9]/.test(s[i+1]) ) {
                i++;
                num += s[i];
            }
            stack.push(num);
        }

        i++;
    }

    return _calSub( stack.reverse() );
};