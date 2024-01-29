import { 
    convert 
} from "../../../solution/medium/0006. Zigzag-Conversion/zigzag-conversion";

describe("0006. Zigzag-Conversion", () => {

    test('Input: s = "AB", numRows = 1, Output: "AB"', () => {
        expect(convert("AB", 1)).toEqual("AB");
    });
    
    test('Input: s = "PAYPALISHIRING", numRows = 3, Output: "PAHNAPLSIIGYIR"', () => {
        expect(convert("PAYPALISHIRING", 3)).toEqual("PAHNAPLSIIGYIR");
    });

    test('Input: s = "PAYPALISHIRING", numRows = 4, Output: "PINALSIGYAHRPI"', () => {
        expect(convert("PAYPALISHIRING", 4)).toEqual("PINALSIGYAHRPI");
    });

    test('Input: s = "A", numRows = 1, Output: "A"', () => {
        expect(convert("A", 1)).toEqual("A");
    });

});