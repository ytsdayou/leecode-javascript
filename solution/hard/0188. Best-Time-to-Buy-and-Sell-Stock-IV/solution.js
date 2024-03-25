/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(k, prices) {
    let n = prices.length, 
        dp = new Array(n).fill([]).map(() => new Array(2*k + 1).fill(0));
    
    for(let i = 0; i < n; i++) {
        for(let j = 0; j < k; j++) {
            if( i === 0 ) {
                dp[i][2*j + 1] = -prices[i]; // (j+1)th buy
                continue;
            }

            dp[i][2*j + 1] = Math.max(dp[i-1][2*j + 1], dp[i-1][2*j] - prices[i]); // (j+1)th buy
            dp[i][2*j + 2] = Math.max(dp[i-1][2*j + 2], dp[i-1][2*j + 1] + prices[i]); // (j+1)th sale
        }
    }

    return dp[n-1][2*k];
};