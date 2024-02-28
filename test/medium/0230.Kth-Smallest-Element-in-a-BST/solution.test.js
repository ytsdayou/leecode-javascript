import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    kthSmallest 
} from "../../../solution/medium/0230.Kth-Smallest-Element-in-a-BST/solution";

describe("0230.Kth-Smallest-Element-in-a-BST", () => {

    test('Input: root = [3,1,4,null,2], k = 1, Output: 1', () => {
        const root = ArrayToBinaryTree([3,1,4,null,2]);

        expect( kthSmallest(root, 1 ) ).toEqual( 1 );
    })

    test('Input: root = [5,3,6,2,4,null,null,1], k = 3, Output: 3', () => {
        const root = ArrayToBinaryTree([5,3,6,2,4,null,null,1]);

        expect( kthSmallest(root, 3 ) ).toEqual( 3 );
    })

})