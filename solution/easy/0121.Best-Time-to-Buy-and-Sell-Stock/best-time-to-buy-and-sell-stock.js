/**
 * dp table
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
    let n = prices.length;
    let dp = new Array(n).fill(0).map(() => new Array(2).fill(0));

    for( let i = 0; i < n; i++ ) {
        if( i === 0 ) {
            dp[i][0] = 0;
            dp[i][1] = -prices[0];
            continue;
        }

        dp[i][0] = Math.max( dp[i-1][0], dp[i-1][1] + prices[i] );
        dp[i][1] = Math.max( dp[i-1][1], -prices[i] );
    }
    
    return dp[n - 1][0];
};