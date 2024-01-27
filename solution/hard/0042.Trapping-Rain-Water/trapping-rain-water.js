/**
 * O(n) space complexity
 * height:   0,1,0,2,1,0,1,3,2,1,2,1
 * leftMax:  0,0,1,1,2,2,2,2,3,3,3,3
 * rightMax: 3,3,3,3,3,3,3,2,2,2,1,0
 * trap:     0,0,1,0,1,2,1,0,0,1,0,0  min(leftMax, rightMax) - hight[i]
 * @param {number[]} height
 * @return {number}
 */
export const trap = function(height) {
    let n = height.length,
        leftMax = new Array(n).fill(0),
        rightMax = new Array(n).fill(0),
        ret = 0;

    for( let i = 0; i < n; i++ ) {
        if( i === 0 ) {
            leftMax[i] = 0;
            rightMax[i] = 0;
        } else {
            leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
            let rightIndex = n - 1 - i;
            rightMax[rightIndex] = Math.max(rightMax[rightIndex + 1], height[rightIndex + 1]);
        }
    }

    for( let i = 0; i < n; i++ ) {
        let trap = Math.min(leftMax[i], rightMax[i]) - height[i];
        if( trap > 0 ) {
            ret += trap;
        }
    }

    return ret;
};

/**
 * two pointer, left and right
 * @param {number[]} height
 * @return {number}
 */
export const trap2 = function(height) {
    let n = height.length,
        left = 0,
        right = n - 1,
        lmax = height[left],
        rmax = height[right],
        ret = 0;

    while( left < right ) {

        if( height[left] <= height[right] ) {

            if( lmax > height[left] ) {
                ret += lmax - height[left];
            } 
            lmax = Math.max(lmax, height[left]);
            left++;

        } else {

            if( rmax > height[right] ) {
                ret += rmax - height[right];
            } 
            rmax = Math.max(rmax, height[right]);
            right--;

        }

    }

    return ret;
}