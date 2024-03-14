/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
export const exist = function(board, word) {
    let m = board.length, n = board[0].length, k = word.length,
        visits = new Array(m).fill(0).map(() => new Array(n).fill(0));

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if( backTrack(i, j, 0) ) {
                return true;
            }
        }
    }

    return false;

    function backTrack(row, col, index) {
        if( index === k ) {
            return true;
        }
        if( row < 0 || row === m || col < 0 || col === n 
            || board[row][col] !== word[index] 
            || visits[row][col] === 1
        ) {
            return false;
        }

        visits[row][col] = 1;

        const res = (
            backTrack(row, col + 1, index + 1) ||
            backTrack(row, col - 1, index + 1) ||
            backTrack(row + 1, col, index + 1) ||
            backTrack(row - 1, col, index + 1)
        );

        visits[row][col] = 0;

        return res;
    }
};