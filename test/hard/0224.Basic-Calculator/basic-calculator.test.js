import { 
    calculate 
} from "../../../solution/hard/0224.Basic-Calculator/basic-calculator";

describe("0150.Evaluate-Reverse-Polish-Notation", () => {

    test('Input: s = "1 + 1", Output: 2', () => {
        expect( calculate("1 + 1") ).toEqual(2);
    })

    test('Input: s = " 2-1 + 2 ", Output: 3', () => {
        expect( calculate(" 2-1 + 2 ") ).toEqual(3);
    })

    test('Input: s = "(1+(4+5+2)-3)+(6+8)", Output: 23', () => {
        expect( calculate("(1+(4+5+2)-3)+(6+8)") ).toEqual(23);
    })

    test('Input: s = "-1 + 1", Output: 0', () => {
        expect( calculate("-1 + 1") ).toEqual(0);
    })

    test('Input: s = "-1", Output: -1', () => {
        expect( calculate("-1") ).toEqual(-1);
    })

    test('Input: s = "(11+(4+5+2)-3)+(6+8)", Output: 33', () => {
        expect( calculate("(11+(4+5+2)-3)+(6+8)") ).toEqual(33);
    })

});