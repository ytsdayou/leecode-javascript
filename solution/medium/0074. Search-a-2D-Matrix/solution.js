/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
export const searchMatrix = function(matrix, target) {
    let m = matrix.length, n = matrix[0].length, l = 0, r = m * n - 1;

    while(l <= r) {
        let mid = Math.floor((l + r) / 2);

        let midRow = Math.floor( mid / n ),
            midCol = mid % n;
        
        if( matrix[midRow][midCol] === target ) {
            return true;
        }

        if( matrix[midRow][midCol] < target ) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }

    return false;
};