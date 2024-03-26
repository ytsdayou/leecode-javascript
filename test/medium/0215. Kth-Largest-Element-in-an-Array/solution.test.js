import { 
    findKthLargest 
} from "../../../solution/medium/0215. Kth-Largest-Element-in-an-Array/solution";

describe("0215. Kth-Largest-Element-in-an-Array", () => {
    
    test('Input: nums = [3,2,1,5,6,4], k = 2, Output: 5', () => {
        expect(findKthLargest([3,2,1,5,6,4], 2)).toEqual(5);
    });

    test('Input: nums = [3,2,3,1,2,4,5,5,6], k = 4, Output: 4', () => {
        expect(findKthLargest([3,2,3,1,2,4,5,5,6], 4)).toEqual(4);
    });

    test('Input: nums = [3], k = 1, Output: 3', () => {
        expect(findKthLargest([3], 1)).toEqual(3);
    });

    test('Input: [-1,2,0], k = 1, Output: 2', () => {
        expect(findKthLargest([-1,2,0], 1)).toEqual(2);
    });

    test('Input: [-1,2,0], k = 2, Output: 0', () => {
        expect(findKthLargest([-1,2,0], 2)).toEqual(0);
    });

    test('Input: [3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], k = 20, Output: 2', () => {
        expect(findKthLargest([3,2,3,1,2,4,5,5,6,7,7,8,2,3,1,1,1,10,11,5,6,2,4,7,8,5,6], 20)).toEqual(2);
    });
});