import { 
    longestConsecutive 
} from "../../../solution/medium/0128.Longest-Consecutive-Sequence/longest-consecutive-sequence";

describe("0128.Longest-Consecutive-Sequence", () => {

    test('Input: nums = [100,4,200,1,3,2], Output: 4', () => {
        expect( longestConsecutive([100,4,200,1,3,2]) ).toEqual( 4 );
    })

    test('Input: nums = [0,3,7,2,5,8,4,6,0,1], Output: 9', () => {
        expect( longestConsecutive([0,3,7,2,5,8,4,6,0,1]) ).toEqual( 9 );
    })

    test('Input: nums = [0,0,-1], Output: 2', () => {
        expect( longestConsecutive([0,0,-1]) ).toEqual( 2 );
    })

    test('Input: nums = [1,2,0,1], Output: 3', () => {
        expect( longestConsecutive([1,2,0,1]) ).toEqual( 3 );
    })

});