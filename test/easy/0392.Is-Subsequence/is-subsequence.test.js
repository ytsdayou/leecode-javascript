import { 
    isSubsequence , isSubsequence2
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

    test('Input: s = "", t = "", Output: true', () => {
        expect(isSubsequence2("", "")).toEqual(true);
    });

    test('Input: s = "", t = "ahbgdc", Output: true', () => {
        expect(isSubsequence2("", "ahbgdc")).toEqual(true);
    });

    test('Input: s = "abc", t = "ahbgdc", Output: true', () => {
        expect(isSubsequence2("abc", "ahbgdc")).toEqual(true);
    });

    test('Input: s = "axc", t = "ahbgdc", Output: false', () => {
        expect(isSubsequence2("axc", "ahbgdc")).toEqual(false);
    });

});