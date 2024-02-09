import { isAnagram } from "../../../solution/easy/0242.Valid-Anagram/valid-anagram";

describe("0242.Valid-Anagram", () => {

    test('Input: s = "anagram", t = "nagaram", Output: true', () => {
        expect( isAnagram("anagram", "nagaram") ).toEqual( true );
    })

    test('Input: s = "rat", t = "car", Output: false', () => {
        expect( isAnagram("rat", "car") ).toEqual( false );
    })

    test('Input: s = "aacc", t = "ccac", Output: false', () => {
        expect( isAnagram("aacc", "ccac") ).toEqual( false );
    })

});