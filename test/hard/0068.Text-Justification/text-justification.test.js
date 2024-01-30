import { 
    fullJustify 
} from "../../../solution/hard/0068.Text-Justification/text-justification";

describe("0068.Text-Justification", () => {

    test('Input: words = ["This", "is", "an", "example", "of", "text", "justification."], maxWidth = 16', () => {
        expect(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16)).toEqual([
            "This    is    an",
            "example  of text",
            "justification.  "
         ]);
    });
    
    test('Input: words = ["What","must","be","acknowledgment","shall","be"], maxWidth = 16', () => {
        expect(fullJustify(["What","must","be","acknowledgment","shall","be"], 16)).toEqual([
            "What   must   be",
            "acknowledgment  ",
            "shall be        "
          ]);
    });

    test('Input: words = ["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], maxWidth = 20', () => {
        expect(
            fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20)
        ).toEqual([
            "Science  is  what we",
            "understand      well",
            "enough to explain to",
            "a  computer.  Art is",
            "everything  else  we",
            "do                  "
          ]);
    });

});