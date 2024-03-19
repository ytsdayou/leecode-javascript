/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
export const search = function(nums, target) {
    let n = nums.length, left = 0, right = n - 1;

    return binarySearch(left, right);

    function binarySearch(l, r) {
        if( l > r ) {
            return -1;
        }
    
        const mid = Math.floor((l + r) / 2);
        if( nums[mid] === target ) {
            return mid;
        }

        if( l === r && r === mid ) {
            return -1;
        }
    
        const lRet = binarySearch(l, mid);
        if( lRet > -1 ) {
            return lRet;
        }

        return binarySearch(mid + 1, r);
    }
};