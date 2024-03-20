import {
    searchRange 
} from "../../../solution/medium/0034. Find-First-and-Last-Position-of-Element-in-Sorted-Array/solution";

describe("0034. Find-First-and-Last-Position-of-Element-in-Sorted-Array", () => {

    test('Input: nums = [5,7,7,8,8,10], target = 8, Output: [3,4]', () => {
        expect( searchRange([5,7,7,8,8,10], 8) ).toEqual([3,4]);
    });

    test('Input: nums = [5,7,7,8,8,10], target = 6, Output: [-1,-1]', () => {
        expect( searchRange([5,7,7,8,8,10], 6) ).toEqual([-1,-1]);
    });
    
    test('Input: nums = [], target = 0, Output: [-1,-1]', () => {
        expect( searchRange([], 0) ).toEqual([-1,-1]);
    });

    test('Input: nums = [1,1,1,1,1,1], target = 1, Output: [0,5]', () => {
        expect( searchRange([1,1,1,1,1,1], 1) ).toEqual([0,5]);
    });

    test('Input: nums = [0,0,1,1,1,1,2,2,2,3,3,4,5,6,6,6,6,7,8], target = 3, Output: [9,10]', () => {
        expect( searchRange([0,0,1,1,1,1,2,2,2,3,3,4,5,6,6,6,6,7,8], 3) ).toEqual([9,10]);
    });

});