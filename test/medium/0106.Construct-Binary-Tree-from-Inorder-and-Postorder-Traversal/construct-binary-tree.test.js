import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    buildTree 
} from "../../../solution/medium/0106.Construct-Binary-Tree-from-Inorder-and-Postorder-Traversal/construct-binary-tree";

describe("0106.Construct-Binary-Tree-from-Inorder-and-Postorder-Traversal", () => {

    test('Input: inorder = [9,3,15,20,7], postorder = [9,15,7,20,3], Output: [3,9,20,null,null,15,7]', () => {
        const p = [9,3,15,20,7];
        const q = [9,15,7,20,3];
        const t = ArrayToBinaryTree([3,9,20,null,null,15,7])
        const r = buildTree(p, q);
        expect( r ).toEqual(t);
    });

    test('Input: inorder = [-1], postorder = [-1], Output: [-1]', () => {
        const p = [-1];
        const q = [-1];
        const t = ArrayToBinaryTree([-1])
        expect( buildTree(p, q) ).toEqual(t);
    });

});