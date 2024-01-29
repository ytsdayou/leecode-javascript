import { 
    lengthOfLastWord 
} from "../../../solution/easy/0058. Length-of-Last-Word/length-of-last-word";


describe("0058. Length-of-Last-Word", () => {

    test('Input: s = "a", Output: 1', () => {
        expect(lengthOfLastWord("a")).toEqual(1);
    });

    test('Input: s = "a ", Output: 1', () => {
        expect(lengthOfLastWord("a ")).toEqual(1);
    });

    test('Input: s = "Hello World", Output: 5', () => {
        expect(lengthOfLastWord("Hello World")).toEqual(5);
    });

    test('Input: s = "   fly me   to   the moon  ", Output: 4', () => {
        expect(lengthOfLastWord("   fly me   to   the moon  ")).toEqual(4);
    });

    test('Input: s = "luffy is still joyboy", Output: 6', () => {
        expect(lengthOfLastWord("luffy is still joyboy")).toEqual(6);
    });

});