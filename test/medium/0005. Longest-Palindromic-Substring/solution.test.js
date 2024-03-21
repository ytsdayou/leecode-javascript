import { 
    longestPalindrome 
} from "../../../solution/medium/0005. Longest-Palindromic-Substring/solution";

describe("0005. Longest-Palindromic-Substring", () => {

    test('Input: s = "babad", Output: "bab"', () => {
        expect(longestPalindrome("babad")).toEqual("bab");
    });
    
    test('Input: s = "cbbd", Output: "bb"', () => {
        expect(longestPalindrome("cbbd")).toEqual("bb");
    });

});