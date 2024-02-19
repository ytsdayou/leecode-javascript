import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    isSymmetric , isSymmetric2
} from "../../../solution/easy/0101.Symmetric-Tree/symmetric-tree";

describe("0100.Same-Tree", () => {

    test('Input: root = [1,2,2,3,4,4,3], Output: true', () => {
        const p = ArrayToBinaryTree([1,2,2,3,4,4,3]);
        expect( isSymmetric2(p) ).toEqual(true);
    });

    test('Input: root = [1,2,2,null,3,null,3], Output: false', () => {
        const p = ArrayToBinaryTree([1,2,2,null,3,null,3]);
        expect( isSymmetric2(p) ).toEqual(false);
    });

});