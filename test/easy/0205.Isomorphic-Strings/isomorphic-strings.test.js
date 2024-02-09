import { isIsomorphic } from "../../../solution/easy/0205.Isomorphic-Strings/isomorphic-strings";

describe("0205.Isomorphic-Strings", () => {

    test('Input: s = "egg", t = "add"", Output: true', () => {
        expect( isIsomorphic("egg", "add") ).toEqual( true );
    })

    test('Input: s = "foo", t = "bar", Output: false', () => {
        expect( isIsomorphic("foo", "bar") ).toEqual( false );
    })

    test('Input: s = "paper", t = "title", Output: true', () => {
        expect( isIsomorphic("paper", "title") ).toEqual( true );
    })

});