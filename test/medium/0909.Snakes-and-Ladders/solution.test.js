import { 
    snakesAndLadders 
} from "../../../solution/medium/0909.Snakes-and-Ladders/solution";

describe("0909.Snakes-and-Ladders", () => {

    test('Input: board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]], Output: 4', () => {
        const board = [[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,-1,-1,-1,-1,-1],[-1,35,-1,-1,13,-1],[-1,-1,-1,-1,-1,-1],[-1,15,-1,-1,-1,-1]];
        expect( snakesAndLadders(board) ).toEqual(4);
    });

    test('Input: board = [[-1,-1],[-1,3]], Output: 1', () => {
        const board = [[-1,-1],[-1,3]];
        expect( snakesAndLadders(board) ).toEqual(1);
    });

});