import { 
    longestCommonPrefix 
} from "../../../solution/easy/0014. Longest-Common-Prefix/longest-common-prefix";

describe("0014. Longest-Common-Prefix", () => {

    test('Input: strs = ["flower","flow","flight"], Output: "fl"', () => {
        expect(longestCommonPrefix(["flower","flow","flight"])).toEqual("fl");
    });


    test('Input: strs = ["dog","racecar","car"], Output: ""', () => {
        expect(longestCommonPrefix(["dog","racecar","car"])).toEqual("");
    });
    
});