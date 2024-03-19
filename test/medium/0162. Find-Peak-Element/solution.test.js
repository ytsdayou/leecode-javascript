import { 
    findPeakElement 
} from "../../../solution/medium/0162. Find-Peak-Element/solution";

describe("0162. Find-Peak-Element", () => {

    test('Input: nums = [1,2,3,1], Output: 2', () => {
        expect( findPeakElement([1,2,3,1]) ).toEqual(2);
    });

    test('Input: nums = [1,2,1,3,5,6,4], Output: 5', () => {
        expect( findPeakElement([1,2,1,3,5,6,4]) ).toEqual(5);
    });

});