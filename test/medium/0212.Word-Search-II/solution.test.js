import { findWords } from "../../../solution/medium/0212.Word-Search-II/solution";

describe("0212.Word-Search-II", () => {

    // test('Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]', () => {
    //     const board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]];
    //     const words = ["oath","pea","eat","rain"];
    //     expect( findWords( board, words ).sort() ).toEqual(["eat","oath"].sort());
        
    // });

    test('Input: board = [["a","b"],["c","d"]], words = ["abcb"]', () => {
        const board = [["a","b"],["c","d"]];
        const words = ["abcb"];
        expect( findWords( board, words ) ).toEqual([]);
    });

});