import { 
    buildTree 
} from "../../../solution/medium/0105.Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal/construct-binary-tree-from-preorder-and-inorder-traversal";
import { ArrayToBinaryTree } from "../../../structures/TreeNode";

describe("0105.Construct-Binary-Tree-from-Preorder-and-Inorder-Traversal", () => {

    test('Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7], Output: [3,9,20,null,null,15,7]', () => {
        const p = [3,9,20,15,7];
        const q = [9,3,15,20,7];
        const t = ArrayToBinaryTree([3,9,20,null,null,15,7])
        expect( buildTree(p, q) ).toEqual(t);
    });

    test('Input: preorder = [-1], inorder = [-1], Output: [-1]', () => {
        const p = [-1];
        const q = [-1];
        const t = ArrayToBinaryTree([-1])
        expect( buildTree(p, q) ).toEqual(t);
    });

});