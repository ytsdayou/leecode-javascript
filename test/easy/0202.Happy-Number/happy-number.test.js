import { isHappy } from "../../../solution/easy/0202.Happy-Number/happy-number";

describe("0202.Happy-Number/happy-number", () => {

    test('Input: n=19, Output:  true', () => {
        expect( isHappy(19) ).toEqual( true );
    })

    test('Input: n=2, Output:  false', () => {
        expect( isHappy(2) ).toEqual( false );
    })

});