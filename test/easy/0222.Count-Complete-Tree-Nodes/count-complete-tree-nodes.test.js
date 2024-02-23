import { 
    countNodes 
} from "../../../solution/easy/0222.Count-Complete-Tree-Nodes/count-complete-tree-nodes";
import { ArrayToBinaryTree } from "../../../structures/TreeNode";

describe("0124.Binary-Tree-Maximum-Path-Sum", () => {

    test('Input: root = [1,2,3,4,5,6], Output: 6', () => {
        const root = [1,2,3,4,5,6];
        const p = ArrayToBinaryTree( root );
        expect( countNodes(p) ).toEqual( 6 );
    });

    test('Input: root = [], Output: 0', () => {
        const root = [];
        const p = ArrayToBinaryTree( root );
        expect( countNodes(p) ).toEqual( 0 );
    });

    test('Input: root = [1], Output: 1', () => {
        const root = [1];
        const p = ArrayToBinaryTree( root );
        expect( countNodes(p) ).toEqual( 1);
    });

});