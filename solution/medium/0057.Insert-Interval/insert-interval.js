/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
export const insert = function(intervals, newInterval) {
    if( !intervals.length ) return [newInterval];

    let ret = [], range = [], i = 0, done = false;

    while( i < intervals.length && !done ) {
        range = intervals[i];

        if( newInterval[1] < range[0] ) {
            ret.push(newInterval);
            done = true;
        } else if( newInterval[0] > range[1] ) {
            // do nothing
        } else {
            range = [Math.min(range[0], newInterval[0]), Math.max(range[1], newInterval[1])];
            while( i + 1 < intervals.length && !( intervals[i+1][1] < range[0] || intervals[i+1][0] > range[1] ) ) {
                i++;
                range = [Math.min(range[0], intervals[i][0]), Math.max(range[1], intervals[i][1])];
            }
            done = true;
        }

        ret.push(range);
        i++;
    }

    for( let j = i; j < intervals.length; j++ ) {
        ret.push(intervals[j]);
    }

    if( !done ) ret.push(newInterval);

    return ret;
};