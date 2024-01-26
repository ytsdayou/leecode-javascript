import { jump } from "../../../solution/medium/0045.Jump-Game-II/jump-game-II";

describe("0045.Jump-Game-II", () => {

    test('Input: nums = [0], Output: 0', () => {
        expect( jump([0]) ).toEqual( 0 );
    });

    test('Input: nums = [1], Output: 0', () => {
        expect( jump([1]) ).toEqual( 0 );
    });

    test('Input: nums = [1,2,1,1,1], Output: 3', () => {
        expect( jump([1,2,1,1,1]) ).toEqual( 3 );
    });

    test('Input: nums = [2,3,1,1,4], Output: 2', () => {
        expect( jump([2,3,1,1,4]) ).toEqual( 2 );
    });

    test('Input: nums = [2,3,0,1,4], Output: 2', () => {
        expect( jump([2,3,0,1,4]) ).toEqual( 2 );
    });

    test('Input: nums = [7,0,9,6,9,6,1,7,9,0,1,2,9,0,3], Output: 2', () => {
        expect( jump([7,0,9,6,9,6,1,7,9,0,1,2,9,0,3]) ).toEqual( 2 );
    })

});