import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    maxDepth 
} from "../../../solution/easy/0104.Maximum-Depth-of-Binary-Tree/maximum-depth-of-binary-tree";

describe("0104.Maximum-Depth-of-Binary-Tree", () => {

    test('Input: root = [3,9,20,null,null,15,7], Output: 3', () => {
        const root = ArrayToBinaryTree([3,9,20,null,null,15,7]);
        expect( maxDepth(root) ).toEqual(3);
    });

    test('Input: root = [1,null,2], Output: 2', () => {
        const root = ArrayToBinaryTree([1,null,2]);
        expect( maxDepth(root) ).toEqual(2);
    });

});