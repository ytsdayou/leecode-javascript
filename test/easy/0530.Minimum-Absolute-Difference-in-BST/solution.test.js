import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    getMinimumDifference 
} from "../../../solution/easy/0530.Minimum-Absolute-Difference-in-BST/solution";

describe("0102.Binary-Tree-Level-Order-Traversal", () => {

    test('Input: root = [4,2,6,1,3], Output: 1', () => {
        const root = ArrayToBinaryTree([4,2,6,1,3]);

        expect( getMinimumDifference(root ) ).toEqual( 1 );
    })

    test('Input: root = [1,0,48,null,null,12,49], Output: 1', () => {
        const root = ArrayToBinaryTree([1,0,48,null,null,12,49]);

        expect( getMinimumDifference(root ) ).toEqual( 1 );
    })

})