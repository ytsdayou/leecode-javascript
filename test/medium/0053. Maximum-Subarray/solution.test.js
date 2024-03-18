import { maxSubArray } from "../../../solution/medium/0053. Maximum-Subarray/solution";

describe("0053. Maximum-Subarray", () => {

    test('Input: nums = [-2,1,-3,4,-1,2,1,-5,4], Output: 6', () => {
        expect( maxSubArray([-2,1,-3,4,-1,2,1,-5,4]) ).toEqual(6);
    });

    test('Input: nums = [1], Output: 1', () => {
        expect( maxSubArray([1]) ).toEqual(1);
    });

    test('Input: nums = [5,4,-1,7,8], Output: 23', () => {
        expect( maxSubArray([5,4,-1,7,8]) ).toEqual(23);
    });

});