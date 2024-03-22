import { isInterleave } from "../../../solution/medium/0097. Interleaving-String/solution";

describe("0097. Interleaving-String", () => {

    test('Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbcbcac", Output: "true"', () => {
        expect(isInterleave("aabcc", "dbbca", "aadbbcbcac")).toEqual(true);
    });
    
    test('Input: s1 = "aabcc", s2 = "dbbca", s3 = "aadbbbaccc", Output: "false"', () => {
        expect(isInterleave("aabcc", "dbbca", "aadbbbaccc")).toEqual(false);
    });

    test('Input: s1 = "", s2 = "", s3 = "", Output: true', () => {
        expect(isInterleave("", "", "")).toEqual(true);
    });

});