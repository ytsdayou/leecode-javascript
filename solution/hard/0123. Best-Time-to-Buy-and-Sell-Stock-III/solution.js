/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
    let n = prices.length,
        dp = new Array(n).fill([]).map(() => new Array(5).fill(0));

    for(let i = 0; i < n; i++) {
        // dp status
        // 0 for haven't buy
        // 1 for the first buy
        // 2 for the first sale
        // 3 for the second buy
        // 4 for the second sale
        if( i === 0 ) {
            dp[i][1] = -prices[i];
            dp[i][3] = -prices[i];
            continue;
        }

        dp[i][0] = 0
        dp[i][1] = Math.max(dp[i-1][1], -prices[i]);
        dp[i][2] = Math.max(dp[i-1][2], dp[i-1][1] + prices[i]);
        dp[i][3] = Math.max(dp[i-1][3], dp[i-1][2] - prices[i]);
        dp[i][4] = Math.max(dp[i-1][4], dp[i-1][3] + prices[i]);
    }

    return dp[n-1][4];
};