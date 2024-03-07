import { ladderLength } from "../../../solution/hard/0127.Word-Ladder/solution";

describe("0127.Word-Ladder", () => {

    test('Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"], Output: 5', () => {
        expect( ladderLength("hit", "cog", ["hot","dot","dog","lot","log","cog"]) ).toEqual(5);
    });

    test('Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log"], Output: 0', () => {
        expect( ladderLength("hit", "cog", ["hot","dot","dog","lot","log"]) ).toEqual(0);
    });

});