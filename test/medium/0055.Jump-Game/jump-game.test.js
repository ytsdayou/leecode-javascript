import { canJump } from "../../../solution/medium/0055.Jump-Game/jump-game";

describe("0055.Jump-Game", () => {

    test('Input: nums = [2,3,1,1,4], Output: true', () => {
        expect( canJump([2,3,1,1,4]) ).toEqual( true );
    });

    test('Input: nums = [3,2,1,0,4], Output: false', () => {
        expect( canJump([3,2,1,0,4]) ).toEqual( false );
    });

});