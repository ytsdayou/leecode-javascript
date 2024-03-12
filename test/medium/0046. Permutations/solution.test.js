import { permute } from "../../../solution/medium/0046. Permutations/solution";

describe("0046. Permutations", () => {

    test('Input: nums = [1,2,3], Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]', () => {
        expect( permute( [1,2,3] ) ).toEqual([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]);
    });

    test('Input: nums = [0,1], Output: [[0,1],[1,0]]', () => {
        expect( permute( [0,1] ) ).toEqual([[0,1],[1,0]]);
    });

    test('Input: nums = [1], Output: [[1]]', () => {
        expect( permute( [1] ) ).toEqual([[1]]);
    });

});