import { 
    intToRoman 
} from "../../../solution/medium/0012.Integer-to-Roman/integer-to-roman";

describe("0013.Roman-to-Integer", () => {

    test('Input: num = 3, Output: "III"', () => {
        expect(intToRoman(3)).toEqual("III");
    });

    test('Input: num = 58, Output: "LVIII"', () => {
        expect(intToRoman(58)).toEqual("LVIII");
    });

    test('Input: num = 1994, Output: "MCMXCIV"', () => {
        expect(intToRoman(1994)).toEqual("MCMXCIV");
    });

});