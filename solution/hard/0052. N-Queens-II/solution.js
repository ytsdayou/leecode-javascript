/**
 * @param {number} n
 * @return {number}
 */
export const totalNQueens = function(n) {
    let ret = 0, cols = new Set(), posXRight = new Set(), posXLeft = new Set();

    backTrack(0);

    return ret;

    function backTrack(row) {
        if( row === n ) {
            ret++;
            return;
        }

        for(let i = 0; i < n; i++) {
            if( cols.has(i) || posXRight.has([row-i].join("-")) || posXLeft.has([row+i].join("-")) ) {
                continue;
            }

            cols.add(i);
            posXRight.add([row-i].join("-"));
            posXLeft.add([row+i].join("-"));

            backTrack(row + 1);

            cols.delete(i);
            posXRight.delete([row-i].join("-"));
            posXLeft.delete([row+i].join("-"));
        }
    }
};