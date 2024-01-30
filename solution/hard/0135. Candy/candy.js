/**
 * 1. Traverse from left to right to ensure that each child receives at least one 
 *    more candy than the previous child if their rating is higher.
 * 2. Traverse from right to left to ensure that each child receives at least one 
 *    more candy than the next child if their rating is higher and they already have 
 *    an equal or fewer number of candies.
 * 3. As each child must receive at least one candy, we will increment the count for 
 *    each child in a subsequent iteration.
 * @param {number[]} ratings
 * @return {number}
 */
export const candy = function(ratings) {
    let n = ratings.length,
        candies = new Array(n).fill(0),
        ret = 0;

    for( let i = 1; i < n; i++ ) {
        if( ratings[i] > ratings[i - 1] ) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for( let i = n - 2; i >= 0; i-- ) {
        if( ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1] ) {
            candies[i] = candies[i + 1] + 1;
        }
    }


    for( let i = 0; i < n; i++ ) {
        ret += candies[i] + 1;
    }

    return ret;
};