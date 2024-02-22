/**
 * The greedy algorithm for solving this problem involves sorting the balloons by 
 * their end coordinates in ascending order. Then, iterate through the sorted 
 * balloons, maintaining the maximum end coordinate seen so far. When encountering 
 * a balloon whose start coordinate is greater than the maximum end coordinate, it 
 * indicates that a new arrow is needed, and the count of arrows is incremented. 
 * This process continues until all balloons are checked, and the final count of 
 * arrows is the minimum number required to burst all the balloons.
 * 
 * This approach leverages the fact that sorting the balloons by their end coordinates 
 * allows for efficient identification of overlapping balloons, enabling a greedy 
 * strategy to minimize the number of arrows needed.
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