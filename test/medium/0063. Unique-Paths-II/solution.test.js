import { 
    uniquePathsWithObstacles 
} from "../../../solution/medium/0063. Unique-Paths-II/solution";

describe("0063. Unique-Paths-II", () => {

    test('Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]], Output: 2', () => {
        expect(uniquePathsWithObstacles([[0,0,0],[0,1,0],[0,0,0]])).toEqual(2);
    });

    test('Input: obstacleGrid = [[0,1],[0,0]], Output: 1', () => {
        expect(uniquePathsWithObstacles([[0,1],[0,0]])).toEqual(1);
    });

});