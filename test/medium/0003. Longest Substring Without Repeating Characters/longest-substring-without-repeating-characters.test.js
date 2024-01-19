import { 
    lengthOfLongestSubstring 
} from "../../../solution/medium/0003. Longest Substring Without Repeating Characters/longest-substring-without-repeating-characters";

describe("0003. Longest Substring Without Repeating Characters", () => {

    test('Input: s = "abcabcbb", Output should be 3', () => {
        expect( lengthOfLongestSubstring( "abcabcbb" ) ).toEqual( 3 );
    });

    test('Input: s = "bbbbb", Output should be 1', () => {
        expect( lengthOfLongestSubstring( "bbbbb" ) ).toEqual( 1 );
    });

    test('Input: s = "pwwkew", Output should be 3', () => {
        expect( lengthOfLongestSubstring( "pwwkew" ) ).toEqual( 3 );
    });

    test('Input: s = "a", Output should be 1', () => {
        expect( lengthOfLongestSubstring( "a" ) ).toEqual( 1 );
    });

    test('Input: s = "", Output should be 0', () => {
        expect( lengthOfLongestSubstring( "" ) ).toEqual( 0 );
    });

})