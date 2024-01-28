import { 
    romanToInt 
} from "../../../solution/easy/0013.Roman-to-Integer/roman-to-integer";

describe("0013.Roman-to-Integer", () => {

    test('Input: s = "III", Output: 3', () => {
        expect(romanToInt("III")).toEqual(3);
    });

    test('Input: s = "LVIII", Output: 58', () => {
        expect(romanToInt("LVIII")).toEqual(58);
    });

    test('Input: s = "MCMXCIV", Output: 1994', () => {
        expect(romanToInt("MCMXCIV")).toEqual(1994);
    });

});