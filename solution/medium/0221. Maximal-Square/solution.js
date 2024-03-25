/**
 * @param {character[][]} matrix
 * @return {number}
 */
export const maximalSquare = function(matrix) {
    let m = matrix.length, n = matrix[0].length, ret = 0;

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            matrix[i][j] = Number(matrix[i][j]);
            if( matrix[i][j] === 1 ) {
                ret = Math.max(ret, 1);
                if( i > 0 && j > 0 ) {
                    if( matrix[i-1][j-1] > 0 && matrix[i-1][j] > 0 && matrix[i][j-1] > 0 ) {
                        matrix[i][j] = 1 + Math.min(matrix[i-1][j-1], matrix[i-1][j], matrix[i][j-1]);
                        ret = Math.max(ret, matrix[i][j]);
                    }
                }
            }
        }
    }

    return ret*ret;
};