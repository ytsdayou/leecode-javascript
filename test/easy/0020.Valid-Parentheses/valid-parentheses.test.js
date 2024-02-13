import { isValid } from "../../../solution/easy/0020.Valid-Parentheses/valid-parentheses";

describe("0020.Valid-Parentheses", () => {

    // test('Input: s = "()", Output: true', () => {
    //     expect( isValid("()") ).toEqual( true );
    // })

    // test('Input: s = "()[]{}", Output: true', () => {
    //     expect( isValid("()[]{}") ).toEqual( true );
    // })

    // test('Input: s = "(]", Output: false', () => {
    //     expect( isValid("(]") ).toEqual( false );
    // })

    test('Input: s = "[", Output: false', () => {
        expect( isValid("[") ).toEqual( false );
    })

});