import { 
    letterCombinations 
} from "../../../solution/medium/0017.Letter-Combinations-of-a-Phone-Number/solution";

describe("0017.Letter-Combinations-of-a-Phone-Number", () => {

    test('Input: digits = "23", Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]', () => {
        expect( letterCombinations( "23" ) ).toEqual(["ad","ae","af","bd","be","bf","cd","ce","cf"]);
    });

    test('Input: digits = "", Output: []', () => {
        expect( letterCombinations( "" ) ).toEqual([]);
    });

    test('Input: digits = "2", Output: Output: ["a","b","c"]', () => {
        expect( letterCombinations( "2" ) ).toEqual(["a","b","c"]);
    });

});