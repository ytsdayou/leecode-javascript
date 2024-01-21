import { merge } from "../../../solution/easy/0088.Merge-Sorted-Array/merge-sorted-array";

describe("0004. Median of Two Sorted Arrays", () => {

    test('Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3, Output should be [1,2,2,3,5,6]', () => {
        const nums1 = [1, 2, 3, 0, 0, 0];
        const m = 3;
        const nums2 = [2, 5, 6];
        const n = 3;

        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1, 2, 2, 3, 5, 6]);
    });

    test('Input: nums1 = [0], m = 0, nums2 = [1], n = 1, Output should be [1]', () => {
        const nums1 = [0];
        const m = 0;
        const nums2 = [1];
        const n = 1;

        merge(nums1, m, nums2, n);
        expect(nums1).toEqual([1]);
    });

    test('Input: nums1 = [1], m = 1, nums2 = [], n = 0, Output should be [1]', () => {
        const nums1 = [1];
        const m = 1;
        const nums2 = [];
        const n = 0;

        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1]);
    });

    test('Input: nums1 = [4,0,0,0,0,0], m = 1, nums2 = [1,2,3,5,6], n = 5, Output should be [1,2,3,4,5,6]', () => {
        const nums1 = [4,0,0,0,0,0];
        const m = 1;
        const nums2 = [1,2,3,5,6];
        const n = 5;

        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1,2,3,4,5,6]);
    });

    test('Input: nums1 = [3,3,4,4,4,4,0,0,0,0,0], m = 6, nums2 = [1,2,3,5,6], n = 5, Output should be [1,2,3,3,3,4,4,4,4,5,6]', () => {
        const nums1 = [3,3,4,4,4,4,0,0,0,0,0];
        const m = 6;
        const nums2 = [1,2,3,5,6];
        const n = 5;

        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1,2,3,3,3,4,4,4,4,5,6]);
    });

    test('Input: nums1 = [1,2,3,5,6,7,0,0,0,0,0,0,0,0,0], m = 6, nums2 = [1,2,6,6,6,6,6,6,9], n = 9, Output should be [1,1,2,2,3,5,6,6,6,6,6,6,6,7,9]', () => {
        const nums1 = [1,2,3,5,6,7,0,0,0,0,0,0,0,0,0];
        const m = 6;
        const nums2 = [1,2,6,6,6,6,6,6,9];
        const n = 9;

        merge(nums1, m, nums2, n);

        expect(nums1).toEqual([1,1,2,2,3,5,6,6,6,6,6,6,6,7,9]);
    });

});