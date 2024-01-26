/**
 * greedy algorithm
 * At each step, we pick a position that lets us jump the farthest, within a 
 * window of choices. If we end up outside the window, it means we've taken a 
 * jump. We compare distances between elements in the window and keep track of 
 * the farthest jump. If the farthest jump goes beyond the end of the numbers 
 * array, we can figure out the number of steps needed. Doing this helps us 
 * find the fewest steps required.
 * @param {number[]} nums
 * @return {number}
 */
export const jump = function(nums) {
    let maxDistance = 0, 
        stepEdge = 0,
        minSteps = 0,
        n = nums.length;

    //base case
    if( n === 1 ) return 0;

    for( let i = 0; i < n; i++ ) {
        maxDistance = Math.max(maxDistance, i + nums[i]);
        if( maxDistance >= n - 1 ) {
            return minSteps + 1;
        }

        if( i === stepEdge ) {
            stepEdge = maxDistance;
            minSteps++;
        }
    }

    return minSteps;
};