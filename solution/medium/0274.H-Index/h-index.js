/**
 * [0, 1, 3, 5, 5] : count
 *  5  4  3  2  1  : idx
 * from right to left, when count < idx the first time, return the value of idx -1.
 * @param {number[]} citations
 * @return {number}
 */
export const hIndex = function(citations) {
    citations = citations.sort((a, b) => a - b);
    let n = citations.length;
    let i;

    for( i = 1; i <= n; i++ ) {
        if( citations[n - i] < i ) {
            break;
        }
    }

    return i - 1;
};