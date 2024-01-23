import { 
    majorityElement 
} from "../../../solution/easy/0169.Majority-Element/majority-element";

describe("0080.Remove-Duplicates-from-Sorted-Array-II", () => {

    test('Input: nums = [3,2,3], Output: 3', () => {
        expect( majorityElement( [3,2,3] ) ).toEqual( 3 );
    });

    test('Input: nums = [2,2,1,1,1,2,2], Output: 2', () => {
        expect( majorityElement( [2,2,1,1,1,2,2] ) ).toEqual( 2 );
    });

    test('Input: nums = [1], Output: 1', () => {
        expect( majorityElement( [1] ) ).toEqual( 1 );
    });

    test('Input: nums = [1,1,1,3,3,3,1,5,6,1], Output: 1', () => {
        expect( majorityElement( [1,1,1,3,3,3,1,3,3,1,1] ) ).toEqual( 1 );
    });

})