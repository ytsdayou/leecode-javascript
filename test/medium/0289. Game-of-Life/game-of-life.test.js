import { 
    gameOfLife 
} from "../../../solution/medium/0289. Game-of-Life/game-of-life";

describe("0289. Game-of-Life", () => {

    test('Input: board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]], Output: [[0,0,0],[1,0,1],[0,1,1],[0,1,0]]', () => {
        let board = [[0,1,0],[0,0,1],[1,1,1],[0,0,0]];
        gameOfLife(board);
        expect( board ).toEqual( [[0,0,0],[1,0,1],[0,1,1],[0,1,0]] );
    });

    test('Input: board = [[1,1],[1,0]], Output: [[1,1],[1,1]]', () => {
        let board = [[1,1],[1,0]];
        gameOfLife(board);
        expect( board ).toEqual( [[1,1],[1,1]] );
    });


});