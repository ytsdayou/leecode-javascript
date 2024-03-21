import { 
    lengthOfLIS 
} from "../../../solution/medium/0300. Longest-Increasing-Subsequence/solution";

describe("0300. Longest-Increasing-Subsequence", () => {

    test('Input: nums = [10,9,2,5,3,7,101,18], Output: 4', () => {
        expect(lengthOfLIS([10,9,2,5,3,7,101,18])).toEqual(4);
    });

    test('Input: nums = [0,1,0,3,2,3], Output: 4', () => {
        expect(lengthOfLIS([0,1,0,3,2,3])).toEqual(4);
    });

    test('Input: nums = [7,7,7,7,7,7,7], Output: 1', () => {
        expect(lengthOfLIS([7,7,7,7,7,7,7])).toEqual(1);
    });

});