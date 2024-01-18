/**
 * We can solve this problem using the sliding window technique.
 * 1. Initialize two pointers, `slow` and `fast`, to mark the 
 *    current substring.
 * 2. Move the `fast` pointer to right one step at a time, and
 *    keep track of the characters seen so far using a hashmap.
 * 3. If a repeating character is found from the hashmap, move `slow`
 *    pointer to right to shrink the window until the repeating character
 *    no longer included in the window.
 * 4. Updated the maximum lenght of the non-repeating substring encountered
 *    so far during this process.
 * 5. Repeating steps 2-4 util the `fast` pointer reaches the end of the string
 * @param {string} s
 * @return {number}
 */
export const lengthOfLongestSubstring = function(s) {
    let slow = 0, fast = 0, ret = 0;

    const mp = new Map();
    while( fast < s.length ) {
        if( mp.has( s[fast] ) && slow <= mp.get( s[fast] ) ) {
            slow = mp.get( s[fast] ) + 1;
        }

        mp.set( s[fast], fast );
        fast++;
        ret = Math.max( ret, fast - slow );
    }

    return ret;
};