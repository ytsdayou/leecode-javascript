/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
export const uniquePathsWithObstacles = function(obstacleGrid) {
    let m = obstacleGrid.length, n = obstacleGrid[0].length,
        dp = new Array(m).fill([]).map(() => new Array(n).fill(0));

    for(let i = m - 1; i >= 0; i--) {
        for(let j = n - 1; j >= 0; j --) {
            if( obstacleGrid[i][j] === 1 ) {
                dp[i][j] = 0;
            } else {
                
                if( i === m - 1 && j === n - 1 ) {
                    dp[i][j] = 1;
                } else if( i === m -1 ) {
                    dp[i][j] = dp[i][j+1];
                } else if( j === n - 1 ) {
                    dp[i][j] = dp[i+1][j];
                } else {
                    dp[i][j] = dp[i][j+1] + dp[i+1][j];
                }

            }
        }
    }

    return dp[0][0];
};