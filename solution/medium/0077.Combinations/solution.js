/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
export const combine = function(n, k) {
    if( k > n ) {
        return [];
    }

    let ret = [];
    backTrack([], 1);
    return ret;

    function backTrack(cur, i) {
        const m = cur.length;

        if( m === k ) {
            ret.push(cur);
            return;
        }

        for( let j = i; j <= n - k + m + 1; j++ ) {
            let next = [...cur];
            next.push(j);
            backTrack(next, j + 1);
        }
    }
};