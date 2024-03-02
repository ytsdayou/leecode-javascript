/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
export const solve = function(board) {
    let m = board.length, n = board[0].length, visit = new Set();

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if( board[i][j] === 'O' && !visit.has(pathKey(i, j)) ) {
                bfs(i, j);
            }
        }
    }

    function bfs(row, col) {
        let needChange = true, queen = [], path = new Set();
        queen.push([row, col]);

        while(queen.length) {
            let [r, c] = queen.shift();
            path.add(pathKey(r, c));

            let directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
            directions.forEach(v => {
                let dr = r + v[0], dc = c + v[1];
                
                if( dr < 0 || dr >= m || dc < 0 || dc >= n ) {
                    needChange = false;
                } else if( board[dr][dc] === 'O' && !path.has(pathKey(dr, dc)) ) {
                    queen.push([dr, dc]);
                    path.add(pathKey(dr, dc));
                }
            })
        }

        path.forEach(p => {
            const [r, c] = p.split("_");
            if( needChange ) {
                board[r][c] = 'X';
            } else {
                visit.add(p);
            }
        })
    }

    function pathKey(r, c) {
        return [r, c].join("_");
    }
};