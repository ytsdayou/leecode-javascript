import { 
    maxPathSum 
} from "../../../solution/hard/0124.Binary-Tree-Maximum-Path-Sum/binary-tree-maximum-path-sum";
import { ArrayToBinaryTree } from "../../../structures/TreeNode";

describe("0124.Binary-Tree-Maximum-Path-Sum", () => {

    test('Input: root = [1,2,3], Output: 6', () => {
        const root = [1,2,3];
        const p = ArrayToBinaryTree( root );
        expect( maxPathSum(p) ).toEqual( 6 );
    });

    test('Input: root = [-10,9,20,null,null,15,7], Output: 42', () => {
        const root = [-10,9,20,null,null,15,7];
        const p = ArrayToBinaryTree( root );
        expect( maxPathSum(p) ).toEqual( 42 );
    });

    test('Input: root = [-3], Output: -3', () => {
        const root = [-3];
        const p = ArrayToBinaryTree( root );
        expect( maxPathSum(p) ).toEqual( -3 );
    });

});