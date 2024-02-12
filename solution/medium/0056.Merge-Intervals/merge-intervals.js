/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
export const merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    for( let i = 0; i < intervals.length; i++ ) {
        while(i + 1 < intervals.length 
            && intervals[i+1][0] >= intervals[i][0] 
            && intervals[i+1][0] <= intervals[i][1]
        ) {
            intervals[i][1] = Math.max(intervals[i][1], intervals[i+1][1]);
            intervals.splice(i+1, 1);
        }
    }

    return intervals;
};