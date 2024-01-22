import { 
    removeDuplicates 
} from "../../../solution/medium/0080.Remove-Duplicates-from-Sorted-Array-II/remove-duplicates-from-sorted-array-II";

describe("0080.Remove-Duplicates-from-Sorted-Array-II", () => {

    test('Input: nums = [1,1,1,2,2,3], Output: 5, nums = [1,1,2,2,3,_]', () => {
        expect( removeDuplicates( [1,1,1,2,2,3] ) ).toEqual( 5 );
    });

    test('Input: nums = [0,0,1,1,1,1,2,3,3], Output: 7, nums = [0,0,1,1,2,3,3,_,_]', () => {
        expect( removeDuplicates( [0,0,1,1,1,1,2,3,3] ) ).toEqual( 7 );
    });

})