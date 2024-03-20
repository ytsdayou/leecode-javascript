import { wordBreak } from "../../../solution/medium/0139. Word-Break/solution";

describe("0139. Word-Break", () => {

    test('Input: s = "leetcode", wordDict = ["leet","code"], Output: true', () => {
        expect(wordBreak("leetcode", ["leet","code"])).toEqual(true);
    });

    test('Input: s = "applepenapple", wordDict = ["apple","pen"], Output: true', () => {
        expect(wordBreak("applepenapple", ["apple","pen"])).toEqual(true);
    });

    test('Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"], Output: false', () => {
        expect(wordBreak("catsandog", ["cats","dog","sand","and","cat"])).toEqual(false);
    });

});