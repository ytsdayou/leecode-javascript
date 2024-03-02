import { solve } from "../../../solution/medium/0130.Surrounded-Regions/solution";

describe("0130.Surrounded-Regions", () => {

    // test('Input: board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]], '
    //     +'Output: [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]', () => {
        
    //     const input = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
    //     solve(input);

    //     expect( input ).toEqual( [["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]] );
    // })

    // test('Input: board = [["X"]], Output: [["X"]]', () => {
    //     const input = [["X"]];
    //     solve(input);

    //     expect( input ).toEqual( [["X"]] );
    // })

    test('Input: board = [["O","O","O"],["O","O","O"],["O","O","O"]], Output: [["O","O","O"],["O","O","O"],["O","O","O"]]', () => {
        const input = [["O","O","O"],["O","O","O"],["O","O","O"]];
        solve(input);

        expect( input ).toEqual( [["O","O","O"],["O","O","O"],["O","O","O"]] );
    })

})