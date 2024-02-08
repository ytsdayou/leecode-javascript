import { setZeroes } from "../../../solution/medium/0073.Set-Matrix-Zeroes/set-matrix-zeroes";

describe("0073.Set-Matrix-Zeroes", () => {

    test('Input: matrix = [[1,1,1],[1,0,1],[1,1,1]], Output: [[1,0,1],[0,0,0],[1,0,1]]', () => {
        let matrix = [[1,1,1],[1,0,1],[1,1,1]];
        setZeroes(matrix);
        expect( matrix ).toEqual( [[1,0,1],[0,0,0],[1,0,1]] );
    });

    test('Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]], Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]', () => {
        let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
        setZeroes(matrix);
        expect( matrix ).toEqual( [[0,0,0,0],[0,4,5,0],[0,3,1,0]] );
    });


});