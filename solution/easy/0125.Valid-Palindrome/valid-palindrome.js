/**
 * First, we need to remove all non-alphanumeric characters. Then, we'll initialize 
 * two pointers, left and right, and move them one step at a time until the left 
 * pointer surpasses the right pointer. We'll return false if their values are not 
 * equal and true once we complete this process.
 * @param {string} s
 * @return {boolean}
 */
export const isPalindrome = function(s) {
    let pattern = /[^a-z0-9]/gi;
    s =  s.replace(pattern, '').toLocaleLowerCase();

    if(!s.length) return true;

    let l = 0, r = s.length - 1;
    while( l <= r ) {
        if( s[l] !== s[r] ) {
            return false;
        }

        l++;
        r--;
    }

    return true;
};