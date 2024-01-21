/**
 * Approach two pointer
 * We can initialize two pointers, i and j, which point to m-1 and n-1 respectively. 
 * We will also have another pointer k initialized to m+n-1, which will keep track of 
 * the position in nums1 where we will be placing the larger element. Then we can start 
 * moving the two pointers i and j from right to left, comparing the elements at these 
 * positions. We will place the larger number in nums1 at position k and decrement the 
 * corresponding pointer, i or j, accordingly. We repeat this process until we have 
 * iterated through all the elements in nums2. If there are some elements in nums1 that 
 * we haven't iterated through, we don't need to do anything because they are already in 
 * their correct place.
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * [1,2,3,0,0,0], 2, [2,5,6], 2, 5
 * 1. [1,2,3,0,0,6], 2, [2,5], 1, 4
 * 2. [1,2,3,0,5,6], 2, [2], 0, 3
 * 3. [1,2,3,2,5,6], 2, [], -1, 2
 * 
 * [0], -1, [1], 0, 0
 */
export const merge = function(nums1, m, nums2, n) {
    let i = m - 1,
        j = n - 1,
        k = m + n - 1;

    while( j >= 0 ) {
        if( nums2[j] >= nums1[i] || i < 0 ) {
            nums1[k--] = nums2[j--];
        } else {
            nums1[k--] = nums1[i];
            nums1[i--] = 0;
        }
    }
};