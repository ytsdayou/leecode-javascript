/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = function(n) {
    let l = 1, r = 1;

    for(let i = 0; i < n - 1; i++) {
        let temp = l;
        l = l + r;
        r = temp;
    }

    return l;
};