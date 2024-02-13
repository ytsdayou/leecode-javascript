/**
 * @param {number[][]} points
 * @return {number}
 */
export const findMinArrowShots = function(points) {
    points.sort((a,b) => a[1] - b[1]);

    let ret = 0, i = 0;

    while( i < points.length ) {
        const right = points[i][1];

        while( i < points.length && points[i][0] <= right ) {
            i++;
        }

        ret++;
    }

    return ret;
};