/**
 * Approach hashmap
 * Even if we use a hashmap additionally, it will still solve this problem in O(1) 
 * space. We can initialize a hashmap where the key represents the elements in the 
 * nums array, and the value is their frequency which is initially set to 1. Then, 
 * we can use another pointer i to iterate through the elements of the nums array. 
 * As the pointer moves to a new element, we update the frequency in the hashmap 
 * accordingly. Since we already know that the majority element should appear more 
 * than n/2 times, where n is the length of the nums array, we can return the result 
 * as soon as we find an element with a frequency greater than n/2, even if we haven't 
 * iterated through all the elements of the nums array.
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement = function(nums) {
    let n = nums.length,
        medium = Math.floor(n/2),
        frequency = new Map();
    
    for( let i = 0; i < n; i++ ) {
        if( frequency.has(nums[i]) ) {
            frequency.set(nums[i], frequency.get(nums[i]) + 1);
        } else {
            frequency.set(nums[i], 1);
        }

        if( frequency.get(nums[i]) > medium ) {
            return nums[i];
        }
    }
};

/**
 * Moore's Voting Algorithm
 * We will initialize two variables, count and candidate, with 0 and an arbitrary 
 * value, respectively.Next, we'll traverse the nums array using a pointer i 
 * starting from the beginning of the nums array.
 * 
 * If count is 0, we'll set the candidate as the current element.
 * If the current element is the same as the candidate, we'll increase count by 1.
 * If the current element is different from the candidate, we'll decrease count by 1.
 * 
 * Upon iterating through all the elements of the nums array, the value of candidate 
 * will be the answer.
 * @param {number[]} nums
 * @return {number}
 */
export const majorityElement2 = function(nums) {
    let count = 0,
        candidate = 0;

    for( let i = 0; i < nums.length; i++ ) {
        if( count === 0 ) {
            candidate = nums[i];
        }

        if( candidate === nums[i] ) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
};