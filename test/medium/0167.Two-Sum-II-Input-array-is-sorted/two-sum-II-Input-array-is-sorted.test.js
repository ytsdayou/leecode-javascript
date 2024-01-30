import { 
    twoSum 
} from "../../../solution/medium/0167.Two-Sum-II-Input-array-is-sorted/two-sum-II-Input-array-is-sorted";


describe("0167.Two-Sum-II-Input-array-is-sorted", () => {

    test('Input: numbers = [2,7,11,15], target = 9, Output: [1,2]', () => {
        expect(twoSum([2,7,11,15], 9)).toEqual([1,2]);
    });

    test('Input: numbers = [2,3,4], target = 6, Output: [1,3]', () => {
        expect(twoSum([2,3,4], 6)).toEqual([1,3]);
    });

    test('Input: numbers = [-1,0], target = -1, Output: [1,2]', () => {
        expect(twoSum([-1,0], -1)).toEqual([1,2]);
    });

});