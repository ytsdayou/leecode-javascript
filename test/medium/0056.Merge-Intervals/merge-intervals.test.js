import { 
    merge 
} from "../../../solution/medium/0056.Merge-Intervals/merge-intervals";

describe("0056.Merge-Intervals", () => {

    test('Input: intervals = [[1,3],[2,6],[8,10],[15,18]], Output: [[1,6],[8,10],[15,18]]', () => {
        expect( merge([[1,3],[2,6],[8,10],[15,18]]) ).toEqual( [[1,6],[8,10],[15,18]] );
    })

    test('Input: intervals = [[1,4],[4,5]], Output: [[1,5]]', () => {
        expect( merge([[1,4],[4,5]]) ).toEqual( [[1,5]] );
    })

});