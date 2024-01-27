import { 
    productExceptSelf , productExceptSelf2
} from "../../../solution/medium/238. Product-of-Array-Except-Self/product-of-array-except-self";

describe("380. Insert-Delete-GetRandom-O(1)", () => {

    test('Input: nums = [1,2,3,4], Output: [24,12,8,6]', () => {
        expect(productExceptSelf([1,2,3,4])).toEqual([24,12,8,6]);
    });

    test('Input: nums = [-1,1,0,-3,3], Output: [0,0,9,0,0]', () => {
        expect(productExceptSelf([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
    });

    test('Input: nums = [1,2,3,4], Output: [24,12,8,6]', () => {
        expect(productExceptSelf2([1,2,3,4])).toEqual([24,12,8,6]);
    });

    test('Input: nums = [-1,1,0,-3,3], Output: [0,0,9,0,0]', () => {
        expect(productExceptSelf2([-1,1,0,-3,3])).toEqual([0,0,9,0,0]);
    });

});