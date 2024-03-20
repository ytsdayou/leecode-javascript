/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const searchRange = function(nums, target) {
    let arr = [], n = nums.length, l = 0, r = n - 1;

    binarySearch(l, r);
    arr.sort((a, b) => a - b);
    if( !arr.length ) {
        return [-1, -1];
    } else if( arr.length === 1 ) {
        return [arr[0], arr[0]];
    } else {
        return [arr[0], arr[arr.length - 1]];
    }

    function binarySearch(left, right) {
        if( left > right ) {
            return ;
        }

        const mid = Math.floor((left + right) / 2);
        if( nums[mid] === target ) {
            arr.push(mid);
        }

        binarySearch(left, mid - 1);
        binarySearch(mid + 1, right);
    }
};