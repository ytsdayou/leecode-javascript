/**
 * Origin | New | State
 *    0   |  0  |   0
 *    1   |  0  |   1
 *    0   |  1  |   2
 *    1   |  1  |   3
 * 
 * 1. iterate through the board and replace with the `State` value
 * 2. iterate through the board again and change the element to the `New` value. 
 * 
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export const gameOfLife = function(board) {
    let m = board.length, n = board[0].length;

    const getNeighbors = function(r, c) {
        let ret = 0;

        for( let i = r - 1; i < r + 2; i++ ) {
            for( let j = c - 1; j < c + 2; j++ ) {
                if( ( i === r && j === c ) || i < 0 || j < 0 || i === m || j === n ) continue;

                if( [1, 3].indexOf( board[i][j] ) > -1 ) ret++;
            }
        }

        return ret;
    }

    // 1. iterate through the board array, replace with the `State` value
    for( let i = 0; i < m; i++ ) {
        for( let j = 0; j < n; j++ ) {
            const neighbors = getNeighbors(i, j);

            if( board[i][j] === 1 ) {
                if( [2, 3].indexOf( neighbors ) > -1 ) {
                    board[i][j] = 3;
                }
            } else {
                if( neighbors === 3 ) {
                    board[i][j] = 2;
                }
            }
        }
    }

    // 2. set to the `New` value
    for( let i = 0; i < m; i++ ) {
        for( let j = 0; j < n; j++ ) {
            if( [2, 3].indexOf( board[i][j] ) > -1 ) {
                board[i][j] = 1
            } else if( board[i][j] === 1 ) {
                board[i][j] = 0;
            }
        }
    }

};