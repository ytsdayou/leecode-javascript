/**
 * we can keep track of the furthest reachable position at each step. If a position
 * is reachable, then all previous positions are also reachable.Therefore, all we 
 * need to do is iterating over each position of the nums array. If we encounter a 
 * position that is not reachable, we immediately abort and return false. Conversely, 
 * if we complete the iteration without encountering an unreachable position, it 
 * indicates that we can reach the final position, prompting us to return true. 
 * @param {number[]} nums
 * @return {boolean}
 */
export const canJump = function(nums) {
    let maxDistance = 0;

    for( let i = 0; i < nums.length; i++ ) {
        if( i > maxDistance ) return false;

        maxDistance = Math.max(maxDistance, i + nums[i]);
    }

    return true;
};
