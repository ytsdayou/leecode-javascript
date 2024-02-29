import { 
    numIslands 
} from "../../../solution/medium/0200.Number-of-Islands/solution";

describe("0200.Number-of-Islands", () => {

    test('Input: , Output: 1', () => {
        const input = [
            ["1","1","1","1","0"],
            ["1","1","0","1","0"],
            ["1","1","0","0","0"],
            ["0","0","0","0","0"]
          ];

        expect( numIslands(input) ).toEqual( 1 );
    })

    test('Input: , Output: 3', () => {
        const input = [
            ["1","1","0","0","0"],
            ["1","1","0","0","0"],
            ["0","0","1","0","0"],
            ["0","0","0","1","1"]
          ];

        expect( numIslands(input) ).toEqual( 3 );
    })

})