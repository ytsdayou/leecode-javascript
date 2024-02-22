import { 
    findMinArrowShots 
} from "../../../solution/medium/0452.Minimum-Number-of-Arrows-to-Burst-Balloons/minimum-number-of-arrows-to-burst-balloons";

describe("452.Minimum-Number-of-Arrows-to-Burst-Balloons", () => {

    test('Input: points = [[10,16],[2,8],[1,6],[7,12]], Output: 2', () => {
        expect( findMinArrowShots([[10,16],[2,8],[1,6],[7,12]]) ).toEqual( 2 );
    })

    test('Input: points = [[1,2],[3,4],[5,6],[7,8]], Output: 4', () => {
        expect( findMinArrowShots([[1,2],[3,4],[5,6],[7,8]]) ).toEqual( 4 );
    })

    test('Input: points = [[1,2],[2,3],[3,4],[4,5]], Output: 2', () => {
        expect( findMinArrowShots([[1,2],[2,3],[3,4],[4,5]]) ).toEqual( 2 );
    })

});