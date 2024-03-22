/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
export const minDistance = function(word1, word2) {
    let m = word1.length, n = word2.length,
        dp = new Array(m+1).fill([]).map(() => new Array(n+1).fill(Number.POSITIVE_INFINITY));

    dp[m][n] = 0;

    for(let i = 0; i <= m; i++) {
        dp[i][n] = m - i;
    }

    for(let j = 0; j <= n; j++) {
        dp[m][j] = n - j;
    }

    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            if( word1[i] === word2[j] ) {
                dp[i][j] = dp[i+1][j+1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i+1][j], dp[i+1][j+1], dp[i][j+1]);
            }
        }
    }

    return dp[0][0];
};