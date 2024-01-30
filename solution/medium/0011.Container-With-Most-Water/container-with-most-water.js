/**
 * @param {number[]} height
 * @return {number}
 */
export const maxArea = function(height) {
    let i = 0, j = height.length - 1, m = 0;

    while ( i < j ) {

        let h = Math.min(height[i], height[j]);
        m = Math.max(m, h * ( j - i ) );

        if( height[i] < height[j] ) {
            
            i++;

        } else {
            j--;

        } 
    }

    return m;
};