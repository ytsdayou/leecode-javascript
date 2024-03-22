/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
export const isInterleave = function(s1, s2, s3) {
    let m = s1.length, n = s2.length, z = s3.length,
        dp = new Array(m+1).fill([]).map(() => new Array(n+1).fill(false));

    dp[m][n] = true;

    if( m + n !== z ) {
        return false;
    }

    for(let i = m; i >= 0; i--) {
        for(let j = n; j >= 0; j--) {
            if( i < m && s1[i] === s3[i+j] && dp[i + 1][j] ) {
                dp[i][j] = true;
            }
            if( j < n && s2[j] === s3[i+j] && dp[i][j + 1] ) {
                dp[i][j] = true;
            }
        }
    }

    return dp[0][0];
};