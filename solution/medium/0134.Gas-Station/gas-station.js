/**
 * The approach to solve this problem is similar to the majority element problem. 
 * If a gas station fits the description, the remaining gas will be a positive 
 * number when we traverse all the elements in the array from left to right.
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
export const canCompleteCircuit = function(gas, cost) {
    let n = gas.length,
        total_remain = 0,
        tank = 0,
        start = 0;

    for( let i = 0; i < n; i++ ) {
        total_remain += gas[i] - cost[i];
        tank += gas[i] - cost[i];

        if( tank < 0 ) {
            start = i + 1;
            tank = 0;
        }
    }

    return total_remain < 0 ? -1 : start;
};