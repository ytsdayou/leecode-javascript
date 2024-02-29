/**
 * @param {character[][]} grid
 * @return {number}
 */
export const numIslands = function(grid) {
    if( !grid.length ) return 0;

    let rows = grid.length, 
        cols = grid[0].length,
        visits = new Set(),
        island = 0;

    for( let i = 0; i < rows; i++ ) {
        for( let j = 0; j < cols; j++ ) {
            if( grid[i][j] === '1' && !visits.has( setKey([i, j]) ) ) {
                spread(i, j);
                island++;
            }
        }
    }

    return island;

    function spread(r, c) {
        let queen = [[r,c]];
        visits.add( setKey(r, c) );

        while(queen.length > 0) {
            let [row, col] = queen.shift();
            let neighbors = [[1, 0], [0, 1], [-1, 0], [0, -1]];

            for( let m = 0; m < neighbors.length; m++ ) {
                let [nr, nc] = neighbors[m];
                let r = row + nr, c = col + nc;
                if( r < rows && r >= 0
                    && c < cols && c >= 0
                    && !visits.has( setKey([r, c]) ) 
                    && grid[r][c] === '1'
                ) {
                    visits.add( setKey([r, c]) );
                    queen.push([r, c]);
                }
            }
        }
    }

    function setKey(r, c) {
        return [r,c].join('_');
    }
};