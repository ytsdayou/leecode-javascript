import { wordPattern } from "../../../solution/easy/0290.Word-Pattern/word-pattern";

describe("0290.Word-Pattern", () => {

    test('Input: pattern = "abba", str = "dog cat cat dog", Output: true', () => {
        expect( wordPattern("abba", "dog cat cat dog") ).toEqual( true );
    })

    test('Input: pattern = "abba", str = "dog cat cat fish", Output: false', () => {
        expect( wordPattern("abba", "dog cat cat fish") ).toEqual( false );
    })

    test('Input: pattern = "aaaa", str = "dog cat cat dog", Output: false', () => {
        expect( wordPattern("aaaa", "dog cat cat dog") ).toEqual( false );
    })

    test('Input: pattern = "abba", str = "dog dog dog dog", Output: false', () => {
        expect( wordPattern("abba", "dog dog dog dog") ).toEqual( false );
    })

});