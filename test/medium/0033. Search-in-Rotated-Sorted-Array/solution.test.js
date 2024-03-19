import { 
    search 
} from "../../../solution/medium/0033. Search-in-Rotated-Sorted-Array/solution";

describe("0033. Search-in-Rotated-Sorted-Array", () => {

    test('Input: nums = [4,5,6,7,0,1,2], target = 0, Output: 4', () => {
        expect( search([4,5,6,7,0,1,2], 0) ).toEqual(4);
    });

    test('Input: nums = [4,5,6,7,0,1,2], target = 3, Output: -1', () => {
        expect( search([4,5,6,7,0,1,2], 3) ).toEqual(-1);
    });

    test('Input: nums = [1], target = 0, Output: -1', () => {
        expect( search([1], 0) ).toEqual(-1);
    });

    test('Input: nums = [1, 3], target = 3, Output: 1', () => {
        expect( search([1, 3], 3) ).toEqual(1);
    });

});