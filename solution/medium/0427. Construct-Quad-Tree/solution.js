import { Node } from "../../../structures/QuadTree";

/**
 * @param {number[][]} grid
 * @return {Node}
 */
export const construct = function(grid) {
    return dfs(grid.length, 0, 0);

    function dfs(n, r, c) {
        let isLeaf = true;
        for(let i = 0; i < n; i++) {
            for(let j = 0; j < n; j++) {
                if( grid[r+i][c+j] !== grid[r][c] ) {
                    isLeaf = false;
                    break;
                }
            }
        }
    
        if( isLeaf ) {
            return new Node(grid[r][c], true);
        }
    
        n = Math.floor(n / 2);
        let topLeft = dfs(n, r, c),
            topRight = dfs(n, r, c + n),
            bottomLeft = dfs(n, r + n, c),
            bottomRight = dfs(n, r + n, c + n);
    
        return new Node(grid[r][c], false, topLeft, topRight, bottomLeft, bottomRight);
    }
};