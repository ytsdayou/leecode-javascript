import { maximalSquare } from "../../../solution/medium/0221. Maximal-Square/solution";

describe("0221. Maximal-Square", () => {

    test('Input: matrix = [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]], Output: 4', () => {
        expect(maximalSquare([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]])).toEqual(4);
    });
    
    test('Input: matrix = [["0","1"],["1","0"]], Output: 1', () => {
        expect(maximalSquare([["0","1"],["1","0"]])).toEqual(1);
    });

    test('Input: matrix = [["0"]], Output: 0', () => {
        expect(maximalSquare([["0"]])).toEqual(0);
    });

    test('Input: matrix = [["1","1","1","1","0"],["1","1","1","1","0"],["1","1","1","1","1"],["1","1","1","1","1"],["0","0","1","1","1"]], Output: 16', () => {
        expect(maximalSquare([["1","1","1","1","0"],["1","1","1","1","0"],["1","1","1","1","1"],["1","1","1","1","1"],["0","0","1","1","1"]])).toEqual(16);
    });

});