/**
 * We can solve this problem using an approach similar to problem No.27. We will 
 * set up a pointer called `counter` to track the expected numbers, and establish a 
 * hashmap to store the frequency of each unique digit. Next, we will iterate through 
 * the elements of the nums array using a pointer `i`, which is initialized to the beginning of the nums 
 * array. We will update the hashmap when the pointer i points to a new element. If we 
 * find the frequency of the new element to be less than or equal to twice from the 
 * hashmap, we will set the element at the position `counter` equal to the element at the 
 * position `i`, and then increment the counter pointer. This process will be repeated 
 * until `i` reaches the end of the nums array. Ultimately, the value of counter will 
 * provide the answer.
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function(nums) {
    let counter = 0, frequency = new Map();

    for( let i = 0; i < nums.length; i++ ) {
        if( frequency.has(nums[i]) ) {
            frequency.set(nums[i], frequency.get(nums[i]) + 1);
        } else {
            frequency.set(nums[i], 1);
        }

        if( frequency.get(nums[i]) <= 2 ) {
            nums[counter] = nums[i];
            counter++;
        }
    }

    return counter;
};