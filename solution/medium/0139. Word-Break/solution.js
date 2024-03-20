/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
export const wordBreak = function(s, wordDict) {
    let m = s.length, n = wordDict.length;
    let dp = new Array(m+1).fill(false);
    dp[m] = true;

    for(let i = m - 1; i >= 0; i-- ) {
        for(let j = 0; j < n; j++) {
            const w = wordDict[j];
            if( i + w.length <= m && s.slice(i, i + w.length) === w ) {
                dp[i] = dp[i + w.length];
            }
            if( dp[i] ) {
                break;
            }
        }
    }

    return dp[0];
};