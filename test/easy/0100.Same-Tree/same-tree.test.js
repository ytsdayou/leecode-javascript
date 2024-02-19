import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { isSameTree } from "../../../solution/easy/0100.Same-Tree/same-tree";


describe("0100.Same-Tree", () => {

    test('Input: p = [1,2,3], q = [1,2,3], Output: true', () => {
        const p = ArrayToBinaryTree([1,2,3]);
        const q = ArrayToBinaryTree([1,2,3]);
        expect( isSameTree(p, q) ).toEqual(true);
    });

    test('Input: p = [1,2], q = [1,null,2], Output: false', () => {
        const p = ArrayToBinaryTree([1,2]);
        const q = ArrayToBinaryTree([1,null,2]);
        expect( isSameTree(p, q) ).toEqual(false);
    });

    test('Input: p = [1,2,1], q = [1,1,2], Output: false', () => {
        const p = ArrayToBinaryTree([1,2,1]);
        const q = ArrayToBinaryTree([1,1,2]);
        expect( isSameTree(p, q) ).toEqual(false);
    });

});