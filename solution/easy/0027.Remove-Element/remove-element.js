/**
 * We can start by setting up two pointers, let's call them 'left' and 'right', 
 * at the beginning and end of the 'nums' array. Then, we'll move the right 
 * pointer to the left, one step at a time. If we come across an element that's 
 * equal to 'val', we'll change that element to '_', and keep on moving the right 
 * pointer to the left. If the element is not equal to 'val', we'll stop the 
 * right pointer from moving further. After that, we'll move the left pointer to 
 * the right, one step at a time. If the element is not equal to 'val', we'll keep 
 * moving the left pointer to the right. But if the element is equal to 'val', 
 * we'll swap it with the element that the right pointer is pointing at, and replace 
 * the element at the right pointer with a '_' then we'll move the right pointer to left.
 * We'll repeat this process until the left pointer is greater than the right pointer.
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const removeElement = function(nums, val) {
    if( nums.length === 0 ) return 0;

    let left = 0, right = nums.length - 1;
    while( left <= right ) {

        while( nums[right] === val && left <= right ) {
            nums[right--] = "_";
        }

        while( nums[left] !== val && left <= right ) {
            left++;
        }

        if( nums[left] === val ) {
            nums[left++] = nums[right];
            nums[right--] = "_";
        }
    }

    return left;
};