import { minPathSum } from "../../../solution/medium/0064. Minimum-Path-Sum/solution";

describe("0064. Minimum-Path-Sum", () => {

    test('Input: grid = [[1,3,1],[1,5,1],[4,2,1]], Output: 7', () => {
        expect(minPathSum([[1,3,1],[1,5,1],[4,2,1]])).toEqual(7);
    });

    test('Input: grid = [[1,2,3],[4,5,6]], Output: 12', () => {
        expect(minPathSum([[1,2,3],[4,5,6]])).toEqual(12);
    });

});