import { exist } from "../../../solution/medium/0079.Word-Search/solution";

describe("0079.Word-Search", () => {

    test('Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED", Output: true', () => {
        expect( exist( [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED" ) ).toEqual(true);
    });

    test('Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE", Output: true', () => {
        expect( exist( [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE" ) ).toEqual(true);
    });

    test('Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB", Output: false', () => {
        expect( exist( [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB" ) ).toEqual(false);
    });

    test('Input: board = [["C","A","A"],["A","A","A"],["B","C","D"]], word = "AAB", Output: true', () => {
        expect( exist( [["C","A","A"],["A","A","A"],["B","C","D"]], "AAB" ) ).toEqual(true);
    });

    test('Input: board = [["a","a"]], word = "aaa", Output: false', () => {
        expect( exist( [["a","a"]], "aaa" ) ).toEqual(false);
    });

});