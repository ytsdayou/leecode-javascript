import { searchInsert } from "../../../solution/easy/0035. Search-Insert-Position/solution";

describe("0035. Search-Insert-Position", () => {

    test('Input: nums = [1,3,5,6], target = 5, Output: 2', () => {
        expect( searchInsert([1,3,5,6], 5) ).toEqual(2);
    });

    test('Input: nums = [1,3,5,6], target = 2, Output: 1', () => {
        expect( searchInsert([1,3,5,6], 2) ).toEqual(1);
    });

    test('Input: nums = [1,3,5,6], target = 7, Output: 4', () => {
        expect( searchInsert([1,3,5,6], 7) ).toEqual(4);
    });

});