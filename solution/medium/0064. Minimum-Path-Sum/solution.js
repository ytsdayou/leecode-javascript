/**
 * @param {number[][]} grid
 * @return {number}
 */
export const minPathSum = function(grid) {
    let m = grid.length, n = grid[0].length,
        dp = new Array(m).fill([]).map(() => new Array(n).fill(0));

    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j--) {
            if( i === m - 1 && j === n - 1 ) {
                dp[i][j] = grid[i][j];
            } else if( i === m - 1 ) {
                dp[i][j] = grid[i][j] + dp[i][j+1];
            } else if( j === n - 1 ) {
                dp[i][j] = grid[i][j] + dp[i+1][j];
            } else {
                dp[i][j] = grid[i][j] + Math.min(dp[i+1][j], dp[i][j+1]);
            }
        }
    }

    return dp[0][0];
};