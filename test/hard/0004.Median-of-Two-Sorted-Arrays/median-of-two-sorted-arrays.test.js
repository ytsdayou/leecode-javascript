import { 
    findMedianSortedArrays 
} from "../../../solution/hard/0004.Median-of-Two-Sorted-Arrays/median-of-two-sorted-arrays";

describe("0004. Median of Two Sorted Arrays", () => {

    test('Input: nums1 = [1,3], nums2 = [], Output should be 2.00000', () => {
        expect( findMedianSortedArrays( [1,3], [] ) ).toEqual( 2.00000 );
    });

    test('Input: nums1 = [1,3], nums2 = [2], Output should be 2.00000', () => {
        expect( findMedianSortedArrays( [1,3], [2] ) ).toEqual( 2.00000 );
    });

    test('Input: nums1 = [1,2], nums2 = [3,4], Output should be 2.50000', () => {
        expect( findMedianSortedArrays( [1,2], [3,4] ) ).toEqual( 2.50000 );
    });

    test('Input: nums1 = [1,2], nums2 = [3,4], Output should be 2.50000', () => {
        expect( findMedianSortedArrays( [1,2], [3,4] ) ).toEqual( 2.50000 );
    });

})