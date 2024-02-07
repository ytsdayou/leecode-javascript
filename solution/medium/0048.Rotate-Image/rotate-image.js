/**
 * use left and right pointer to mark the layer(circle)
 * we need swap position (r - l) loops, in each loop we move top left to a temp
 * variable, and then move position of bottom left to the position top left, and 
 * do the same operation like this 
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
export const rotate = function(matrix) {
    let l = 0, r = matrix.length - 1;

    while( l < r ) {

        for( let i = 0; i < r - l; i++ ) {

            let top = l, bottom = r;

            let topLeft = matrix[top][l + i];

            matrix[top][l + i] = matrix[bottom - i][l];

            matrix[bottom - i][l] = matrix[bottom][r - i];

            matrix[bottom][r - i] = matrix[top + i][r];

            matrix[top + i][r] = topLeft;

        }

        l++;
        r--;

    }
};