import { 
    sumNumbers 
} from "../../../solution/medium/0129.Sum-Root-to-Leaf-Numbers/sum-root-to-leaf-numbers";
import { ArrayToBinaryTree } from "../../../structures/TreeNode";

describe("0129.Sum-Root-to-Leaf-Numbers", () => {

    test('Input: root = [1,2,3], Output: 25', () => {
        const root = [1,2,3];
        const p = ArrayToBinaryTree( root );
        expect( sumNumbers(p) ).toEqual( 25 );
    });

    test('root = [4,9,0,5,1], Output: 1026', () => {
        const root = [4,9,0,5,1];
        const p = ArrayToBinaryTree( root );
        expect( sumNumbers(p) ).toEqual( 1026 );
    });

});