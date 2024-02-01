import {
    minSubArrayLen 
} from "../../../solution/medium/0209.Minimum-Size-Subarray-Sum/minimum-size-subarray-sum";

describe("0209.Minimum-Size-Subarray-Sum", () => {

    test('Input: target = 7, nums = [2,3,1,2,4,3], Output: 2', () => {
        expect( minSubArrayLen(7, [2,3,1,2,4,3]) ).toEqual( 2 );
    });

    test('Input: target = 4, nums = [1,4,4], Output: 1', () => {
        expect( minSubArrayLen(4, [1,4,4]) ).toEqual( 1 );
    });

    test('Input: target = 11, nums = [1,1,1,1,1,1,1,1], Output: 0', () => {
        expect( minSubArrayLen(11, [1,1,1,1,1,1,1,1]) ).toEqual( 0 );
    });

    test('Input: target = 11, nums = [1,2,3,4,5], Output: 3', () => {
        expect( minSubArrayLen(11, [1,2,3,4,5]) ).toEqual( 3 );
    });

    test('Input: target = 213, nums = [12,28,83,4,25,26,25,2,25,25,25,12], Output: 8', () => {
        expect( minSubArrayLen(213, [12,28,83,4,25,26,25,2,25,25,25,12]) ).toEqual( 8 );
    });

});