/**
 * We can start by using two pointers, 'slow' and 'fast', both positioned at 
 * the beginning of the 'nums' array. Initially, we'll increment the fast 
 * pointer by one step at a time until the element it points to is greater 
 * than the element pointed to by the slow pointer. Once that happens, we'll 
 * move the slow pointer ahead by one step. If the element pointed to by the 
 * slow pointer is less than or equal to the previous one, we should swap the 
 * elements pointed to by the slow and fast pointers. We'll repeat this process 
 * until the fast pointer reaches the end of the 'nums' array. The result will 
 * then be the position of the slow pointer plus one.
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function(nums) {
    let slow = 0, fast = 0, n = nums.length - 1;

    while( fast <= n ) {

        while( nums[fast] === nums[slow] && fast <= n ) {
            fast++;
        }

        if( slow + 1 <= n && fast <= n ) {
            slow++;
            if( nums[slow] <= nums[slow-1] ) {
                const tmp = nums[slow];
                nums[slow] = nums[fast];
                nums[fast++] = tmp;
            }
        }
    }

    return slow + 1;
};


/**
 * Approach learned from the comunity
 * The approach is similar to mine, but its code is simpler and cleaner than mine,
 * and also is easy to understand.
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates2 = function(nums) {
    let counter = 1;

    for( let i = 1; i < nums.length; i++ ) {
        if( nums[i] != nums[i-1] ) {
            nums[counter] = nums[i];
            counter++;
        }
    }

    return counter;
}