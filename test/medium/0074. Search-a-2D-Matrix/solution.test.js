import { searchMatrix } from "../../../solution/medium/0074. Search-a-2D-Matrix/solution";

describe("0035. Search-Insert-Position", () => {

    test('Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3, Output: true', () => {
        expect( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3) ).toEqual(true);
    });

    test('Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13, Output: false', () => {
        expect( searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13) ).toEqual(false);
    });

});