/**
 * Understanding the principle of Roman numerals is crucial for solving this problem. 
 * Typically, Roman numerals are arranged from largest to smallest, reading from left 
 * to right. However, for numerals like 4, 9, 40, 90, 400, and 900, they are written 
 * in a reverse order, from smaller to larger, when reading from left to right. 
 * Therefore, to solve the problem, we can iterate through the entire string from left 
 * to right. If the next position exists and is larger than the current one, we subtract 
 * its value; otherwise, we add its value.
 * @param {string} s
 * @return {number}
 */
export const romanToInt = function(s) {
    const o = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    };
    let n = s.length, total = 0, lastDecimal = 0;

    for( let i = 0; i < n; i++ ) {
        let char = s[i],
            num = o[char];
        
        if( typeof s[i+1] !== 'undefined' && num < o[s[i+1]]  ) {
            total = total - num;
        } else {
            total = total + num;
        }
    }

    return total;
};