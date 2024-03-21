/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
export const coinChange = function(coins, amount) {
    let dp = new Array(amount + 1).fill(amount + 1);
    dp[0] = 0;

    for(let i = 1; i <= amount; i++) {
        for(let j = 0; j < coins.length; j++) {
            const c = coins[j];
            if( i - c >= 0 ) {
                dp[i] = Math.min(dp[i], 1 + dp[i - c]);
            }
        }
    }

    return dp[amount] !== amount + 1 ? dp[amount] : -1;
};