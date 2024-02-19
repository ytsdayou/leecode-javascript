import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    invertTree 
} from "../../../solution/easy/0226.Invert-Binary-Tree/invert-binary-tree";

describe("0100.Same-Tree", () => {

    test('Input: root = [4,2,7,1,3,6,9], Output: [4,7,2,9,6,3,1]', () => {
        const p = ArrayToBinaryTree([4,2,7,1,3,6,9]);
        const q = ArrayToBinaryTree([4,7,2,9,6,3,1]);
        const r = invertTree(p);
        expect( r ).toEqual(q);
    });

    test('Input: root = [2,1,3], Output: [2,3,1]', () => {
        const p = ArrayToBinaryTree([2,1,3]);
        const q = ArrayToBinaryTree([2,3,1]);
        expect( invertTree(p) ).toEqual(q);
    });

    test('Input: root = [], Output: []', () => {
        const p = ArrayToBinaryTree([]);
        const q = ArrayToBinaryTree([]);
        expect( invertTree(p) ).toEqual(q);
    });

});