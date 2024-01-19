/**
 * Aprroach 1. two pointer. Time Complexity O(m+n). Space Complexity O(m+n)
 * 1. Merge the two sorted arrays into one sorted array
 *    · Initialize two pointers to start at the beginning of each array.
 *    · Create a new array to store the merged result
 *    · Compare the elements that the two pointers are pointing at, and put
 *      the smaller one into the new array, then move the respective pointer
 *      forward by one position.
 *    · Repeat comparison and insertion process until all elements from one
 *      of the arrays have been included in the new array.
 *    · Place the remaining elements from the other array into the new array
 * 2. Determin the position of median
 *    · If the length of the merged array is odd, the median will be the postion
 *      equal to the length of the merged array divided by 2.
 *    · If the length of the merged array is even, the median will be the average
 *      of the elements at positon equal to the length of the merged array divided 
 *      by 2, and position equal to the length of the merged array divided by 2 
 *      minus 1.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = function(nums1, nums2) {
    let p1 = 0, p2 = 0, mergedArr = [];

    while( p1 < nums1.length && p2 < nums2.length ) {
        if( nums1[p1] <= nums2[p2] ) {
            mergedArr.push( nums1[p1] );
            p1++;
        } else {
            mergedArr.push( nums2[p2] );
            p2++;
        }
    }

    if( p1 < nums1.length ) {
        for( let i = p1; i < nums1.length; i++ ) {
            mergedArr.push( nums1[i] );
        }
    }
    if( p2 < nums2.length ) {
        for( let i = p2; i < nums2.length; i++ ) {
            mergedArr.push( nums2[i] );
        }
    }

    let n = mergedArr.length, 
        d = Math.floor( n/2 ),
        ret = mergedArr[ d ];
    if( n % 2 === 0 ) {
        ret = ( ( mergedArr[ d ] + mergedArr[ d - 1 ] ) / 2 ).toFixed(5);
    } 

    return Number(ret);
};

/**
 * Aprroach 2. find the Kth smallest number. Time Complexity O( log(m+n) )
 * 查找中位数就相当于
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays2 = function(nums1, nums2) {
    
}