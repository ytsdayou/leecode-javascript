import { insert } from "../../../solution/medium/0057.Insert-Interval/insert-interval";

describe("0056.Merge-Intervals", () => {

    // test('Input: intervals = [[1,3],[6,9]], newInterval = [2,5], Output: [[1,5],[6,9]]', () => {
    //     expect( insert([[1,3],[6,9]], [2,5]) ).toEqual( [[1,5],[6,9]] );
    // })

    // test('Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8], Output: [[1,2],[3,10],[12,16]]', () => {
    //     expect( insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]) ).toEqual( [[1,2],[3,10],[12,16]] );
    // })

    // test('Input: intervals = [], newInterval = [5,7], Output: [[5,7]]', () => {
    //     expect( insert([], [5,7]) ).toEqual( [[5,7]] );
    // })

    test('Input: intervals = [[1,5]], newInterval = [6,8], Output: [[1,5],[6,8]]', () => {
        expect( insert([[1,5]], [6,8]) ).toEqual( [[1,5],[6,8]] );
    })

    test('Input: intervals = [[1,5]], newInterval = [0,0], Output: [[0,0],[1,5]]', () => {
        expect( insert([[1,5]], [0,0]) ).toEqual( [[0,0],[1,5]] );
    })

});