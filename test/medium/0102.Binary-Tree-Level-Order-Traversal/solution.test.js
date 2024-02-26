import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    levelOrder 
} from "../../../solution/medium/0102.Binary-Tree-Level-Order-Traversal/solution";

describe("0637.Average-of-Levels-in-Binary-Tree", () => {

    test('Input: root = [3,9,20,null,null,15,7], Output: [[3],[9,20],[15,7]]', () => {
        const root = ArrayToBinaryTree([3,9,20,null,null,15,7]);

        expect( levelOrder(root ) ).toEqual( [[3],[9,20],[15,7]] );
    })

    test('Input: root = [1], Output: [[1]]', () => {
        const root = ArrayToBinaryTree([1]);

        expect( levelOrder(root ) ).toEqual( [[1]] );
    })

    test('Input: root = [], Output: []', () => {
        const root = ArrayToBinaryTree([]);

        expect( levelOrder(root ) ).toEqual( [] );
    })

})