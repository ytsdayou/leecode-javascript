import { 
    isSubsequence 
} from "../../../solution/easy/0392.Is-Subsequence/is-subsequence";

describe("0392.Is-Subsequence", () => {

    test('Input: s = "", t = "", Output: true', () => {
        expect(isSubsequence("", "")).toEqual(true);
    });

    test('Input: s = "", t = "ahbgdc", Output: true', () => {
        expect(isSubsequence("", "ahbgdc")).toEqual(true);
    });

    test('Input: s = "abc", t = "ahbgdc", Output: true', () => {
        expect(isSubsequence("abc", "ahbgdc")).toEqual(true);
    });

    test('Input: s = "axc", t = "ahbgdc", Output: false', () => {
        expect(isSubsequence("axc", "ahbgdc")).toEqual(false);
    });

});