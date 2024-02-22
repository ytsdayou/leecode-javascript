import { threeSum } from "../../../solution/medium/0015. 3Sum/3sum";

describe("15. 3Sum", () => {

    test('Input: nums = [-1,0,1,2,-1,-4], Output: [[-1,-1,2],[-1,0,1]]', () => {
        expect( threeSum([-1,0,1,2,-1,-4]) ).toEqual( [[-1,-1,2],[-1,0,1]] );
    });

    test('Input: nums = [0,1,1], Output: []', () => {
        expect( threeSum([0,1,1]) ).toEqual( [] );
    });

    test('Input: nums =  [0,0,0], Output: [[0,0,0]]', () => {
        expect( threeSum([0,0,0]) ).toEqual( [[0,0,0]] );
    });

});