import { 
    maxSubarraySumCircular 
} from "../../../solution/medium/0918. Maximum-Sum-Circular-Subarray/solution";

describe("0918. Maximum-Sum-Circular-Subarray", () => {

    test('Input: nums = [1,-2,3,-2], Output: 3', () => {
        expect( maxSubarraySumCircular([1,-2,3,-2]) ).toEqual(3);
    });

    test('Input: nums = [5,-3,5], Output: 10', () => {
        expect( maxSubarraySumCircular([5,-3,5]) ).toEqual(10);
    });

    test('Input: nums = [-3,-2,-3], Output: -2', () => {
        expect( maxSubarraySumCircular([-3,-2,-3]) ).toEqual(-2);
    });

});