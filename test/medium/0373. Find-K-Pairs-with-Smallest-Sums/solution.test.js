import { 
    kSmallestPairs 
} from "../../../solution/medium/0373. Find-K-Pairs-with-Smallest-Sums/solution";

describe("0373. Find-K-Pairs-with-Smallest-Sums", () => {
    
    test('Input: nums1 = [1,7,11], nums2 = [2,4,6], k = 3, Output: [[1,2],[1,4],[1,6]]', () => {
        expect(kSmallestPairs([1,7,11], [2,4,6], 3)).toEqual([[1,2],[1,4],[1,6]]);
    });

    test('Input: nums1 = [1,1,2], nums2 = [1,2,3], k = 2, Output: [[1,1],[1,1]]', () => {
        expect(kSmallestPairs([1,1,2], [1,2,3], 2)).toEqual([[1,1],[1,1]]);
    });

});