/**
 * 1. iterate through all elements, mark 0 at first row or first column if there is 0
 *    in their row or column, respectivly. We need a variable mark the row 0 because
 *    the first row and first column will overlap in the position [0, 0]
 * 2. then we iterate row and column to change the element depend on the mark.
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const setZeroes = function(matrix) {
    let m = matrix.length, n = matrix[0].length, rowZero = false;

    for( let i = 0; i < m; i++ ) {
        for( let j = 0; j < n; j++ ) {
            if( matrix[i][j] === 0 ) {
                matrix[0][j] = 0;
                
                if( i === 0 ) {
                    rowZero = true;
                } else {
                    matrix[i][0] = 0;
                }
            }
        }
    }

    for( let i = 1; i < m; i++ ) {
        for( let j = 1; j < n; j++ ) {
            if( matrix[i][0] === 0 || matrix[0][j] === 0 ) {
                matrix[i][j] = 0;
            }
        }
    }

    if( matrix[0][0] === 0 ) {
        for( let i = 1; i < m; i++ ) {
            matrix[i][0] = 0;
        }
    }

    if( rowZero ) {
        for( let j = 0; j < n; j++ ) {
            matrix[0][j] = 0;
        }
    }

};