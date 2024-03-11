import { combine } from "../../../solution/medium/0077.Combinations/solution";

describe("0077.Combinations", () => {

    test('Input: n = 4, k = 2, Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]', () => {
        expect( combine( 4, 2 ) ).toEqual([[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]);
    });

    test('Input: n = 1, k = 1, Output: [[1]]', () => {
        expect( combine( 1, 1 ) ).toEqual([[1]]);
    });

});