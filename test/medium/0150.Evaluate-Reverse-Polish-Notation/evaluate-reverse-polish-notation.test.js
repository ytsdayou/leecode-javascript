import { 
    evalRPN 
} from "../../../solution/medium/0150.Evaluate-Reverse-Polish-Notation/evaluate-reverse-polish-notation";

describe("0150.Evaluate-Reverse-Polish-Notation", () => {

    test('Input: tokens = ["18"], Output: 18', () => {
        expect( evalRPN(["18"]) ).toEqual(18);
    })

    test('Input: tokens = ["2","1","+","3","*"], Output: 9', () => {
        expect( evalRPN(["2","1","+","3","*"]) ).toEqual(9);
    })

    test('Input: tokens = ["4","13","5","/","+"], Output: 6', () => {
        expect( evalRPN(["4","13","5","/","+"]) ).toEqual(6);
    })

    test('Input: tokens = ["3","11","+","5","-"], Output: 9', () => {
        expect( evalRPN(["3","11","+","5","-"]) ).toEqual(9);
    })

    test('Input: tokens = ["4","3","-"], Output: 1', () => {
        expect( evalRPN(["4","3","-"]) ).toEqual(1);
    })

    test('Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"], Output: 22', () => {
        expect( evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]) ).toEqual(22);
    })

});