import { 
    rotate, rotate2,
} from "../../../solution/medium/0189.Rotate-Array/rotate-array";

describe("0189.Rotate-Array", () => {

    test('Input: nums = [1,2,3,4,5,6,7], k = 3, Output: [5,6,7,1,2,3,4]', () => {
        let nums = [1,2,3,4,5,6,7], k = 3;
        rotate(nums, k);
        expect( nums ).toEqual( [5,6,7,1,2,3,4] );
    });

    test('Input: nums = [1,2,3,4,5,6], k = 4, Output: [3,4,5,6,1,2]', () => {
        let nums = [1,2,3,4,5,6], k = 4;
        rotate(nums, k);
        expect( nums ).toEqual( [3,4,5,6,1,2] );
    });

    test('Input: nums = [-1,-100,3,99], k = 2, Output: [3,99,-1,-100]', () => {
        let nums = [-1,-100,3,99], k = 2;
        rotate(nums, k);
        expect( nums ).toEqual( [3,99,-1,-100] );
    });

    test('Input: nums = [-1,-100,3,99, 6, 6], k = 2, Output: [6,6,-1,-100,3,99]', () => {
        let nums = [-1,-100,3,99, 6, 6], k = 2;
        rotate(nums, k);
        expect( nums ).toEqual( [6,6,-1,-100,3,99] );
    });

    test('Input: nums = [1,2,3,4,5,6,7], k = 3, Output: [5,6,7,1,2,3,4]', () => {
        let nums = [1,2,3,4,5,6,7], k = 3;
        rotate2(nums, k);
        expect( nums ).toEqual( [5,6,7,1,2,3,4] );
    });

    test('Input: nums = [1,2,3,4,5,6], k = 4, Output: [3,4,5,6,1,2]', () => {
        let nums = [1,2,3,4,5,6], k = 4;
        rotate2(nums, k);
        expect( nums ).toEqual( [3,4,5,6,1,2] );
    });

    test('Input: nums = [-1,-100,3,99], k = 2, Output: [3,99,-1,-100]', () => {
        let nums = [-1,-100,3,99], k = 2;
        rotate2(nums, k);
        expect( nums ).toEqual( [3,99,-1,-100] );
    });

    test('Input: nums = [-1,-100,3,99, 6, 6], k = 2, Output: [6,6,-1,-100,3,99]', () => {
        let nums = [-1,-100,3,99, 6, 6], k = 2;
        rotate2(nums, k);
        expect( nums ).toEqual( [6,6,-1,-100,3,99] );
    });

})