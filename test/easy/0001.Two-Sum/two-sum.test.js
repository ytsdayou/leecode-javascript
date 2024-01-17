import { twoSum } from "../../../solution/easy/0001.Two-Sum/two-sum";

describe("0001.Two Sum", () => {

    test('Input: nums = [2,7,11,15], target = 9, Output should be [0,1]', () => {
      console.log("------", twoSum( [2,7,11,15], 9))
      expect( twoSum( [2,7,11,15], 9)).toStrictEqual( [0,1] );
    });

    test('Input: nums = [3,2,4], target = 6, Output should be [1,2]', () => {
      expect( twoSum( [3,2,4], 6) ).toStrictEqual( [1,2] );
    });

    test('Input: nums = [3,3], target = 6, Output should be [0,1]', () => {
      expect( twoSum( [3,3], 6 )).toStrictEqual( [0,1] );
    });

});