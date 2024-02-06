import { 
    minWindow 
} from "../../../solution/hard/0076.Minimum-Window-Substring/minimum-sindow-substring";

describe("0030.Substring-with-Concatenation-of-All-Words", () => {

    test('Input: s = "acbbaca", t = "aba", Output:  "baca"', () => {
        expect( minWindow("acbbaca", "aba") ).toEqual( "baca" );
    });

    // test('Input: s = "ADOBECODEBANC", t = "ABC", Output:  "BANC"', () => {
    //     expect( minWindow("ADOBECODEBANC", "ABC") ).toEqual( "BANC" );
    // });

    // test('Input: s = "a", t = "a", Output:  "a"', () => {
    //     expect( minWindow("a", "a") ).toEqual( "a" );
    // });

    // test('Input: s = "a", t = "aa", Output:  ""', () => {
    //     expect( minWindow("a", "aa") ).toEqual( "" );
    // });

});