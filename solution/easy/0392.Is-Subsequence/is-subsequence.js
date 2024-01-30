/**
 * We can efficiently solve this problem using two pointers, while ensuring careful 
 * consideration of boundary conditions. Specifically, when s is empty, the answer 
 * will always be true. Conversely, the answer will always be false when t is empty, 
 * or when the length of s is greater than the length of t.
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
export const isSubsequence = function(s, t) {
    if( !s.length ) return true;
    if( !t.length || s.length > t.length ) return false;

    let i = 0, j = 0;

    while( j < t.length ) {
        if( t[j] === s[i] ) {
            if( i === s.length - 1 ) {
                return true;
            } else {
                i++;
            }
        }

        j++;
    }

    return false;
};

/**
 * dp approach (chatgpt)
 * The goal is to determine if string 's' is a subsequence of string 't'. To achieve 
 * this, we can use a dynamic programming approach with a 2D array, where dp[i][j] 
 * represents whether the first i characters of 's' form a subsequence of the first 
 * j characters of 't'.
 * 
 * We initialize a 2D array, dp, with dimensions (m+1) x (n+1), where m and n are the 
 * lengths of strings 's' and 't' respectively. We set dp[0][j] to true, as an empty 
 * string is always a subsequence of any string including an empty string.
 * 
 * Then, we iterate through the characters of 's' and 't', and fill in the dp array 
 * based on the matching characters. If the characters match, we set dp[i][j] to 
 * dp[i-1][j-1], indicating that the current characters can be matched as part of the 
 * subsequence. Otherwise, we set dp[i][j] to dp[i][j-1], indicating that we ignore 
 * the current character in 't' and continue checking the subsequence.
 * 
 * Finally, we return the value of dp[m][n], which represents whether the entire 's' 
 * is a subsequence of 't'.
 * 
 * This dynamic programming approach allows us to efficiently determine whether 's' is 
 * a subsequence of 't' by considering all possible subsequence combinations and efficiently 
 * storing the results.
 */
export const isSubsequence2 = function(s, t) {
    let m = s.length;
    let n = t.length;
    let dp = new Array(m + 1).fill(false).map(() => new Array(n + 1).fill(false));

    for (let j = 0; j <= n; j++) {
        dp[0][j] = true;
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = dp[i][j - 1];
            }
        }
    }

    return dp[m][n];
}