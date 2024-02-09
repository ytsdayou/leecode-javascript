import { canConstruct } from "../../../solution/easy/0383.Ransom-Note/ransom-note";

describe("0383.Ransom-Note", () => {

    test('Input: ransomNote = "a", magazine = "b", Output: false', () => {
        expect( canConstruct("a", "b") ).toEqual( false );
    })

    test('Input: ransomNote = "aa", magazine = "ab", Output: false', () => {
        expect( canConstruct("aa", "ab") ).toEqual( false );
    })

    test('Input: ransomNote = "aa", magazine = "aab", Output: true', () => {
        expect( canConstruct("aa", "aab") ).toEqual( true );
    })

});