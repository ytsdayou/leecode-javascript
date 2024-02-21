import { 
    flatten 
} from "../../../solution/medium/0114.Flatten-Binary-Tree-to-Linked-List/flatten-binary-tree-to-linked-list";
import { ArrayToBinaryTree } from "../../../structures/TreeNode";

describe("0114.Flatten-Binary-Tree-to-Linked-List", () => {

    test('Input: root = [1,2,5,3,4,null,6], Output: [1,null,2,null,3,null,4,null,5,null,6]', () => {
        const root = [1,2,5,3,4,null,6];
        const p = ArrayToBinaryTree( root );
        const q = ArrayToBinaryTree([1,null,2,null,3,null,4,null,5,null,6])
        flatten(p);
        expect( p ).toEqual( q );
    });

    test('Input: root = [], Output: []', () => {
        const root = [];
        const p = ArrayToBinaryTree( root );
        const q = ArrayToBinaryTree([])
        flatten(p);
        expect( p ).toEqual( q );
    });

    test('Input: root = [0], Output: [0]', () => {
        const root = [0];
        const p = ArrayToBinaryTree( root );
        const q = ArrayToBinaryTree([0])
        flatten(p);
        expect( p ).toEqual( q );
    });

});