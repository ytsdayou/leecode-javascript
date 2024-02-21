import { hasPathSum } from "../../../solution/easy/0112.Path-Sum/path-sum";
import { ArrayToBinaryTree } from "../../../structures/TreeNode";

describe("0112.Path-Sum", () => {

    test('Input: root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22, Output: true', () => {
        const root = [5,4,8,11,null,13,4,7,2,null,null,null,1];
        const p = ArrayToBinaryTree( root );
        expect( hasPathSum(p, 22) ).toEqual( true );
    });

    test('Input: root = [1,2,3], targetSum = 5, Output: false', () => {
        const root = [1,2,3];
        const p = ArrayToBinaryTree( root );
        expect( hasPathSum(p, 5) ).toEqual( false );
    });

    test('Input: root = [], targetSum = 0, Output: false', () => {
        const root = [];
        const p = ArrayToBinaryTree( root );
        expect( hasPathSum(p, 0) ).toEqual( false );
    });

});