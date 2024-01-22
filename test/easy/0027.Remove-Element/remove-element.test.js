import { removeElement } from "../../../solution/easy/0027.Remove-Element/remove-element";

describe("0001.Two Sum", () => {

    test('Input: nums = [3,2,2,3], val = 3, Output: 2, nums = [2,2,_,_]', () => {
      expect( removeElement( [3,2,2,3], 3)).toStrictEqual( 2 );
    });

    test('Input: nums = [0,1,2,2,3,0,4,2], val = 2, Output: 5, nums = [0,1,4,0,3,_,_,_]', () => {
      expect( removeElement( [0,1,2,2,3,0,4,2], 2) ).toStrictEqual( 5 );
    });

    test('Input: nums = [3], target = 3, Output: 0, nums = [_]', () => {
      expect( removeElement( [3], 3 )).toStrictEqual( 0 );
    });

    test('Input: nums = [3,3,3,3,3,3], target = 3, Output: 0, nums = [_]', () => {
      expect( removeElement( [3,3,3,3,3,3], 3 )).toStrictEqual( 0 );
    });

    test('Input: nums = [1,2,4,8,0,3,3,3,3,3,3], target = 3, Output: 5, nums = [1,2,4,8,0,_,_,_,_,_,_]', () => {
      expect( removeElement( [1,2,4,8,0,3,3,3,3,3,3], 3 )).toStrictEqual( 5 );
    });

    test('Input: nums = [1,3,2,3,4,3,3,3,3], target = 3, Output: 3, nums = [1,2,4,_,4,_,_,_,_]', () => {
      expect( removeElement( [1,3,2,3,4,3,3,3,3], 3 )).toStrictEqual( 3 );
    });

});