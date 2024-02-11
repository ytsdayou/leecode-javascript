import { groupAnagrams } from "../../../solution/medium/0049.Group-Anagrams/group-anagrams";

describe("0049.Group-Anagrams", () => {

    test('Input: strs = ["eat","tea","tan","ate","nat","bat"], Output:  [["bat"],["nat","tan"],["ate","eat","tea"]]', () => {
        expect( groupAnagrams(["eat","tea","tan","ate","nat","bat"]) ).toEqual( [["eat","tea","ate"],["tan","nat"],["bat"]] );
    })

    test('Input: strs = [""], Output:  [[""]]', () => {
        expect( groupAnagrams([""]) ).toEqual( [[""]] );
    })

    test('Input: strs = ["a"], Output:  [["a"]]', () => {
        expect( groupAnagrams(["a"]) ).toEqual( [["a"]] );
    })

});