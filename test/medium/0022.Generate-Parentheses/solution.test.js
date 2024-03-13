import { 
    generateParenthesis 
} from "../../../solution/medium/0022.Generate-Parentheses/solution";

describe("0022.Generate-Parentheses", () => {

    test('Input: n = 3, Output: ["((()))","(()())","(())()","()(())","()()()"]', () => {
        expect( generateParenthesis( 3 ).sort() ).toEqual(["((()))","(()())","(())()","()(())","()()()"].sort());
    });

    test('Input: n = 1, Output: ["()"]', () => {
        expect( generateParenthesis( 1 ) ).toEqual(["()"]);
    });

});