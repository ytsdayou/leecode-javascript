import { 
    findSubstring2
} from "../../../solution/hard/0030.Substring-with-Concatenation-of-All-Words/substring-with-concatenation-of-all-words";

describe("0209.Minimum-Size-Subarray-Sum", () => {

    test('Input: s = "barfoothefoobarman", words = ["foo","bar"], Output: [0,9]', () => {
        expect( findSubstring2("barfoothefoobarman", ["foo","bar"]) ).toEqual( [0,9] );
    });

    test('Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"], Output: []', () => {
        expect( findSubstring2("wordgoodgoodgoodbestword", ["word","good","best","word"]) ).toEqual( [] );
    });

    test('Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"], Output: [6,9,12]', () => {
        expect( findSubstring2("barfoofoobarthefoobarman", ["bar","foo","the"]) ).toEqual( [6,9,12] );
    });

});