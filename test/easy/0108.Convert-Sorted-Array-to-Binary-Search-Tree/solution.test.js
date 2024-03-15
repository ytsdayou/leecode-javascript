import { 
    sortedArrayToBST 
} from "../../../solution/easy/0108.Convert-Sorted-Array-to-Binary-Search-Tree/solution";
import { ArrayToBinaryTree } from "../../../structures/TreeNode";

describe("0108.Convert-Sorted-Array-to-Binary-Search-Tree", () => {

    test('Input: nums = [-10,-3,0,5,9], Output: [0,-3,9,-10,null,5]', () => {
        let res = sortedArrayToBST( [-10,-3,0,5,9] ),
            tree1 = ArrayToBinaryTree([0,-3,9,-10,null,5]);
        expect( res ).toEqual(tree1)
    });

    test('Input: nums = [1,3], Output: [3,1]', () => {
        let res = sortedArrayToBST( [1,3] ),
            tree1 = ArrayToBinaryTree([3,1]);
        expect( res ).toEqual(tree1);
    });

});