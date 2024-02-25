import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    rightSideView 
} from "../../../solution/medium/0199.Binary-Tree-Right-Side-View/binary-tree-right-side-view";

describe("0199.Binary-Tree-Right-Side-View", () => {

    test('Input: root = [1,2,3,null,5,null,4], Output: [1,3,4]', () => {
        const root = ArrayToBinaryTree([1,2,3,null,5,null,4]);

        expect( rightSideView(root ) ).toEqual( [1, 3, 4] );
    })

    test('Input: root = [1,null,3], Output: [1,3]', () => {
        const root = ArrayToBinaryTree([1,null,3]);

        expect( rightSideView(root ) ).toEqual( [1,3] );
    })

    test('Input: root = [], Output: []', () => {
        const root = ArrayToBinaryTree([]);

        expect( rightSideView(root ) ).toEqual( [] );
    })

    test('Input: root = [1,2,3,4], Output: [1,3,4]', () => {
        const root = ArrayToBinaryTree([1,2,3,4]);

        expect( rightSideView(root ) ).toEqual( [1,3,4] );
    })

});