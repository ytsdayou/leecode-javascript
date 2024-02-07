/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const spiralOrder = function(matrix) {
    let ret = [], m = matrix.length, n = matrix[0].length, direct = 'right', row = 0, col = 0;

    while( ret.length < m * n ) {
        ret.push( matrix[row][col] );
        matrix[row][col] = undefined;

        switch(direct) {
            case 'right':
                if( col + 1 < n && typeof matrix[row][col+1] !== 'undefined' ) {
                    col++;
                } else if( row + 1 < m && typeof matrix[row+1][col] !== 'undefined' ) {
                    row++;
                    direct = 'down';
                }
                break;
            case 'down':
                if( row + 1 < m && typeof matrix[row+1][col] !== 'undefined' ) {
                    row++;
                } else if( col - 1 < n && typeof matrix[row][col-1] !== 'undefined' ) {
                    col--;
                    direct = 'left';
                }
                break;
            case 'left':
                if( col - 1 >= 0 && typeof matrix[row][col-1] !== 'undefined' ) {
                    col--;
                } else if( row - 1 >= 0 && typeof matrix[row-1][col] !== 'undefined' ) {
                    row--;
                    direct = 'up';
                }
                break;
            case 'up':
                if( row - 1 >= 0 && typeof matrix[row-1][col] !== 'undefined' ) {
                    row--;
                } else if( col + 1 < n && typeof matrix[row][col+1] !== 'undefined' ) {
                    col++;
                    direct = 'right';
                }
                break;
        }
    }

    return ret;
};