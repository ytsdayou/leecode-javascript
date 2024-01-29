import { 
    strStr 
} from "../../../solution/easy/0028.Implement-strStr/implement-strStr";

describe("0028.Implement-strStr", () => {

    test('Input: haystack = "sadbutsad", needle = "sad", Output: 0', () => {
        expect(strStr("sadbutsad", "sad")).toEqual(0);
    });
    
    test('Input: haystack = "leetcode", needle = "leeto", Output: -1', () => {
        expect(strStr("leetcode", "leeto")).toEqual(-1);
    });

    test('Input: haystack = "sasbutsas", needle = "sad", Output: 0', () => {
        expect(strStr("sasbutsas", "sad")).toEqual(-1);
    });

});