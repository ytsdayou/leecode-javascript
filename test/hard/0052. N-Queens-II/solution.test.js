import { totalNQueens } from "../../../solution/hard/0052. N-Queens-II/solution";

describe("0052. N-Queens-II", () => {

    test('Input: n = 4, Output: 2', () => {
        expect( totalNQueens( 4 ) ).toEqual(2);
    });

    test('Input: n = 1, Output: 1', () => {
        expect( totalNQueens( 1 ) ).toEqual(1);
    });

});