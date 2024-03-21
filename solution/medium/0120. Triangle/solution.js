/**
 * @param {number[][]} triangle
 * @return {number}
 */
export const minimumTotal = function(triangle) {
    let n = triangle.length, dp = new Array(n).fill([]).map(() => new Array(n).fill([]));

    for(let i = n - 1; i >= 0; i--) {
        for(let j = 0; j < i + 1; j++) {
            if( i + 1 === n ) {
                dp[i][j] = triangle[i][j];
            } else {
                dp[i][j] = triangle[i][j] + Math.min(dp[i+1][j], dp[i+1][j+1]);
            }
        }
    }

    return dp[0][0];
};