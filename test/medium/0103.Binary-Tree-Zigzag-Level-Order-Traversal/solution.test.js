import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    zigzagLevelOrder 
} from "../../../solution/medium/0103.Binary-Tree-Zigzag-Level-Order-Traversal/solution";

describe("0102.Binary-Tree-Level-Order-Traversal", () => {

    test('Input: root = [3,9,20,null,null,15,7], Output: [[3],[20,9],[15,7]]', () => {
        const root = ArrayToBinaryTree([3,9,20,null,null,15,7]);

        expect( zigzagLevelOrder(root ) ).toEqual( [[3],[20,9],[15,7]] );
    })

    test('Input: root = [1], Output: [[1]]', () => {
        const root = ArrayToBinaryTree([1]);

        expect( zigzagLevelOrder(root ) ).toEqual( [[1]] );
    })

    test('Input: root = [], Output: []', () => {
        const root = ArrayToBinaryTree([]);

        expect( zigzagLevelOrder(root ) ).toEqual( [] );
    })

    test('Input: root = [1,2,3,4,null,null,5], Output: [[1],[3,2],[4,5]]', () => {
        const root = ArrayToBinaryTree([1,2,3,4,null,null,5]);

        expect( zigzagLevelOrder(root ) ).toEqual( [[1],[3,2],[4,5]] );
    })

})