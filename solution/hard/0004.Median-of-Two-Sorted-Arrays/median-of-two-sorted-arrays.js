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
 * The search for the median is essentially a special case of finding the kth smallest number. 
 * In this problem, the goal is to find the median in two arrays. If the combined length of the 
 * arrays is odd, the median is the kth element, where k = floor((length+1)/2). If the combined 
 * length is even, the median is the average of the kth and (k+1)th elements, where k = floor((length+1)/2). 
 * To find the kth element in the merged array, we can break it down into finding the k/2th smallest 
 * elements in each of the two arrays. Then, we compare these elements and remove the smaller element 
 * and the elements before it from their respective arrays. After removing these smaller elements, 
 * the search task becomes finding the (k - (k/2))th smallest element. This process is repeated until 
 * one of the arrays becomes empty, or the value of k is equal to 1.
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays2 = function(nums1, nums2) {
    let comLen = nums1.length + nums2.length,
        k = Math.floor( (comLen+1)/2 ),
        ret = 0;

    if( comLen % 2 === 0 ) { // if odd

        ret = ( ( findKthElement(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, k) 
                + findKthElement(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, k + 1) ) / 2 ).toFixed(5);

    } else {  //if even

        ret = findKthElement(nums1, 0, nums1.length - 1, nums2, 0, nums2.length - 1, k).toFixed(5);

    }

    return Number(ret);
}

const findKthElement = function(arr1, start1, end1, arr2, start2, end2, k) {
    let len1 = end1 - start1 + 1,
        len2 = end2 - start2 + 1;
    
    if( len1 === 0 ) return arr2[ start2 + k - 1 ];
    if( len2 === 0 ) return arr1[ start1 + k - 1 ];
    if( k === 1 ) return Math.min(arr1[start1], arr2[start2]);

    let index1 = start1 + Math.min(len1, Math.floor(k / 2)) - 1;
    let index2 = start2 + Math.min(len2, Math.floor(k / 2)) - 1;

    if( arr1[index1] <= arr2[index2] ) {
        return findKthElement(arr1, index1 + 1, end1, arr2, start2, end2, k - (index1 - start1 + 1) );
    }
    
    return findKthElement(arr1, start1, end1, arr2, index2 + 1, end2, k - (index2 - start2 + 1) );
}