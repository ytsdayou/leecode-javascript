import { 
    removeDuplicates 
} from "../../../solution/easy/0026.Remove-Duplicates-from-Sorted-Array/remove-duplicates-from-sorted-array";

describe("0001.Two Sum", () => {

    test('Input: nums = [1,1,2], Output: 2, nums = [1,2,_]', () => {
        expect( removeDuplicates( [1,1,2] ) ).toStrictEqual( 2 );
    });

    test('Input: nums = [0,0,1,1,1,2,2,3,3,4], Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]', () => {
        expect( removeDuplicates( [0,0,1,1,1,2,2,3,3,4] ) ).toStrictEqual( 5 );
    });

});