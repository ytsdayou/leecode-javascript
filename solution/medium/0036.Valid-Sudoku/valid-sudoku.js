/**
 * we can solve this problem by using 3 maps to store the appearance of the numbers.
 * @param {character[][]} board
 * @return {boolean}
 */
export const isValidSudoku = function(board) {
    let rows = new Array(9).fill(null).map(() => new Map()),
        cols = new Array(9).fill(null).map(() => new Map()),
        square = new Map();

    for( let i = 0; i < 9; i++ ) {
        for( let j = 0; j < 9; j++ ) {
            if( board[i][j] === '.' ) continue;
            
            const v = board[i][j], m = Math.floor(i/3), n = Math.floor(j/3), key = `${m}-${n}`;

            if( !square.has(key) ) {
                square.set(key, new Map());
            }

            if( rows[i].has(v) || cols[j].has(v) || square.get(key).has(v) ) {
                return false;
            }

            rows[i].set(v, 1);
            cols[j].set(v, 1);
            square.get(key).set(v, 1);
        }
    }

    return true;
};