import { ArrayToBinaryTree } from "../../../structures/TreeNode";
import { 
    averageOfLevels 
} from "../../../solution/easy/0637.Average-of-Levels-in-Binary-Tree/solution";

describe("0199.Binary-Tree-Right-Side-View", () => {

    test('Input: root = [3,9,20,null,null,15,7], Output: [3.00000,14.50000,11.00000]', () => {
        const root = ArrayToBinaryTree([3,9,20,null,null,15,7]);

        expect( averageOfLevels(root ) ).toEqual( [3.00000,14.50000,11.00000] );
    })

    test('Input: root = [3,9,20,15,7], Output: [3.00000,14.50000,11.00000]', () => {
        const root = ArrayToBinaryTree([3,9,20,15,7]);

        expect( averageOfLevels(root ) ).toEqual( [3.00000,14.50000,11.00000] );
    })

})