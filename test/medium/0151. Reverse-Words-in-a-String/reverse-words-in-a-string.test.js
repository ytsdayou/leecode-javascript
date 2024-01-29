import { 
    reverseWords 
} from "../../../solution/medium/0151. Reverse-Words-in-a-String/reverse-words-in-a-string";

describe("0151. Reverse-Words-in-a-String", () => {
    
    test('Input: s = "the sky is blue", Output: "blue is sky the"', () => {
        expect(reverseWords("the sky is blue")).toEqual("blue is sky the");
    });

    test('Input: s = "  hello world  ", Output: "world hello"', () => {
        expect(reverseWords("  hello world  ")).toEqual("world hello");
    });

    test('Input: s = "a good   example", Output: "example good a"', () => {
        expect(reverseWords("a good   example")).toEqual("example good a");
    });

});