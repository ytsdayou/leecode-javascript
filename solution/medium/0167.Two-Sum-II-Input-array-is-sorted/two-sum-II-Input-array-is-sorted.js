/**
 * To solve this problem without using extra space, we can employ the two-pointer 
 * approach. We initialize two pointers, "left" and "right," at the beginning and 
 * end of the sorted nums array, respectively. When the sum of the elements pointed 
 * to by these pointers is greater than the target, we move the "right" pointer to 
 * the left, as this would decrease the sum. Conversely, if the sum is less than the 
 * target, we move the "left" pointer to the right. Since the array is sorted in 
 * non-decreasing order, this adjustment ensures that the sum becomes closer to the 
 * target. If the sum is equal to the target, we have found the desired indices.
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function(numbers, target) {
    let i = 0, j = numbers.length - 1;

    while( i < j ) {
        if( numbers[i] + numbers[j] > target ) {
            j--;
        } else if( numbers[i] + numbers[j] < target ) {
            i++;
        } else {
            return [i+1, j+1];
        }
    }
};