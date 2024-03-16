import { construct } from "../../../solution/medium/0427. Construct-Quad-Tree/solution";
import { ArrayToQuadTreeNode } from "../../../structures/QuadTree";

describe("0427. Construct-Quad-Tree", () => {

    test('Input: grid = [[0,1],[1,0]], Output: [[0,1],[1,0],[1,1],[1,1],[1,0]]', () => {
        let output = ArrayToQuadTreeNode( [[0,1],[1,0],[1,1],[1,1],[1,0]] );
        expect( construct([[0,1],[1,0]]) ).toEqual(output);
    });

    test('Input: grid = [[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]', () => {
        let output = ArrayToQuadTreeNode( [[0,1],[1,1],[0,1],[1,1],[1,0],null,null,null,null,[1,0],[1,0],[1,1],[1,1]] );
        expect( construct([[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]) ).toEqual(output);
    });

});