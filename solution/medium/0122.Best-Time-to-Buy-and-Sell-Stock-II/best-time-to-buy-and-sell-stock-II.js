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

        dp[i][0] = Math.max(dp[i-1][0], dp[i-1][1] + prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] - prices[i]);
    }

    return dp[n-1][0];
};

/**
 * O(1) space complexity
 */
export const maxProfit2 = function(prices) {
    let n = prices.length;
    
    let dp_i_0 = 0, dp_i_1 = -Infinity;

    for( let i = 0; i < n; i++ ) {
        if( i === 0 ) {
            dp_i_0 = 0;
            dp_i_1 = -prices[0];
        }

        dp_i_0 = Math.max(dp_i_0, dp_i_1 + prices[i]);
        dp_i_1 = Math.max(dp_i_1, dp_i_0 - prices[i]);
    }

    return dp_i_0;
}