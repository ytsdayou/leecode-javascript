import { jump } from "../../../solution/medium/0045.Jump-Game-II/jump-game-II";

describe("0045.Jump-Game-II", () => {

    test('Input: nums = [2,3,1,1,4], Output: 2', () => {
        expect( jump([2,3,1,1,4]) ).toEqual( 2 );
    });

    test('Input: nums = [2,3,0,1,4], Output: 2', () => {
        expect( jump([2,3,0,1,4]) ).toEqual( 2 );
    });

});