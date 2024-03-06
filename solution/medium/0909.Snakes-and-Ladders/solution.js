/**
 * @param {number[][]} board
 * @return {number}
 */
export const snakesAndLadders = function(board) {
    const n = board.length;
    board.reverse();

    let queen = [], visits = new Set();
    queen.push([1, 0]); // [squre, moves]

    while(queen.length) {
        const [square, moves] = queen.shift();

        for( let i = 1; i <= 6; i++ ) {
            let nextSquare = square + i;
            let [r, c] = parseSquare(nextSquare);

            if( board[r][c] !== -1 ) {
                nextSquare = board[r][c];
            }
            if( nextSquare >= n * n ) {
                return moves + 1;
            }
            if( !visits.has(nextSquare) ) {
                queen.push([nextSquare, moves + 1]);
                visits.add(nextSquare);
            }
        }
    }

    return -1;

    function parseSquare(s) {
        let row = Math.floor( ( s - 1 ) / n );
        let col = ( s - 1 ) % n;

        if( row % 2 ) {
            col = n - 1 - col;
        }

        return [row, col];
    }
};