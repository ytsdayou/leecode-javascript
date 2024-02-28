import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    isValidBST 
} from "../../../solution/medium/0098.Validate-Binary-Search-Tree/solution";

describe("0098.Validate-Binary-Search-Tree", () => {

    test('Input: root = [2,1,3], Output: true', () => {
        const root = ArrayToBinaryTree([2,1,3]);

        expect( isValidBST(root) ).toEqual( true );
    })

    test('Input: root = [5,1,4,null,null,3,6], Output: false', () => {
        const root = ArrayToBinaryTree([5,1,4,null,null,3,6]);

        expect( isValidBST(root) ).toEqual( false );
    })

})