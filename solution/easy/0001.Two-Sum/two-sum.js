/**
 * This problem need to find out two indices of two number in an array that sum up to a specific target.
 * To approach this problem, you should iterate over each item and use a map to cache the data. 
 * The map's key should be the difference between the target and the current item, and the map's value 
 * should be the current index. If you use the current item as key to find the another index in the map, 
 * you can return the current index and the another index.
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if ( map.has( nums[ i ] ) ) {
            return [ map.get( nums[ i ] ), i ];
        }
        
        map.set( target - nums[ i ], i );
    }
};