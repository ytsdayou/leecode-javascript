import { combinationSum, combinationSum2 } from "../../../solution/medium/0039. Combination-Sum/solution";

describe("0039. Combination Sum", () => {

    test('Input: candidates = [2,3,6,7], target = 7, Output: [[2,2,3],[7]]', () => {
        expect( combinationSum2( [2,3,6,7], 7 ) ).toEqual([[2,2,3],[7]]);
    });

    test('Input: candidates = [2,3,5], target = 8, Output: [[2,2,2,2],[2,3,3],[3,5]]', () => {
        expect( combinationSum2( [2,3,5], 8 ) ).toEqual([[2,2,2,2],[2,3,3],[3,5]]);
    });

    test('Input: candidates = [2], target = 1, Output: []', () => {
        expect( combinationSum2( [2], 1 ) ).toEqual([]);
    });

});