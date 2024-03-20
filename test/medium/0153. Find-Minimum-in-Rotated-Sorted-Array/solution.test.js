import { 
    findMin 
} from "../../../solution/medium/0153. Find-Minimum-in-Rotated-Sorted-Array/solution";

describe("0153. Find-Minimum-in-Rotated-Sorted-Array", () => {

    test('Input: nums = [3,4,5,1,2], Output: 1', () => {
        expect( findMin([3,4,5,1,2]) ).toEqual(1);
    });

    test('Input: nums = [4,5,6,7,0,1,2], Output: 0', () => {
        expect( findMin([4,5,6,7,0,1,2]) ).toEqual(0);
    });

    test('Input: nums = [11,13,15,17], Output: 11', () => {
        expect( findMin([11,13,15,17]) ).toEqual(11);
    });

});