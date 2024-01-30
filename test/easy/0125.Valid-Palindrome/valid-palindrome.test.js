import { 
    isPalindrome 
} from "../../../solution/easy/0125.Valid-Palindrome/valid-palindrome";

describe("0125.Valid-Palindrome", () => {

    test('Input: s = "A man, a plan, a canal: Panama", Output: true', () => {
        expect(isPalindrome("A man, a plan, a canal: Panama")).toEqual(true);
    });

    test('Input: s = "race a car", Output: false', () => {
        expect(isPalindrome("race a car")).toEqual(false);
    });

    test('Input: s = " ", Output: true', () => {
        expect(isPalindrome(" ")).toEqual(true);
    });

});