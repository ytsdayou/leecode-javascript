/**
 * we can solve this problem efficiently using stack
 * When we encounter a operation symbol, we pop two nodes from stack and caculate its value,
 * then we push the new value into stack. 
 * Iterate through over tokens then we will get the finally result from the stack.
 * @param {string[]} tokens
 * @return {number}
 */
export const evalRPN = function(tokens) {
    let stack = [];

    for( let i = 0; i < tokens.length; i++ ) {
        if( ['+', '-', '*', '/'].indexOf(tokens[i]) === -1 ) {
            stack.push(Number(tokens[i]));
        } else {
            const right = stack.pop();
            const left = stack.pop();

            let expression = null;
            if( tokens[i] === '+' ) {
                expression = left + right;
            } else if( tokens[i] === '-' ) {
                expression = left - right;
            } else if( tokens[i] === '*' ) {
                expression = left * right;
            } else if( tokens[i] === '/' ) {
                const r = left / right;
                expression = r > 0 ? Math.floor(r) : Math.ceil(r);
            }

            stack.push(expression);
        }
    }

    return stack.pop();
};